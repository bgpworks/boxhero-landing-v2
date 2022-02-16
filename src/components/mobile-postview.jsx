import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { format } from "date-fns";
import { AppDownloadLink } from "./common";
import MobileLayout from "./mobile-layout";
import PostBody from "./mobile-postbody";
import svgCompleteArrowPrev from "../images/complete-arrow-prev.svg";
import {
  pageContainer,
  linkToListSection,
  linkToListLabel,
  postContainer,
  postHeader,
  postCategory,
  postTitle,
  authorSection,
  authorPhotoWrapper,
  nameAndDate,
  postThumbnail,
  relatedPostCard,
  categoryInRelatedPost,
  titleInRelatedPost,
  labelInRelatedPost,
  startNowSection,
  startNowTitle,
  startNowDesc,
  startNowButton,
  relatedPostsSection,
  postFooter,
} from "./mobile-postview.module.css";

const LinkToListSection = () => {
  const { t } = useI18next();

  return (
    <Link
      to="/blog"
      className={linkToListSection}
    >
      <img
        src={svgCompleteArrowPrev}
        alt="arrow-prev"
      />
      <span className={linkToListLabel}>{t("blog:linkToList")}</span>
    </Link>
  );
};

const AuthorAndDateSection = ({ author, authorPhoto, date }) => (
  <div className={authorSection}>
    {authorPhoto && (
      <img
        src={authorPhoto}
        className={authorPhotoWrapper}
        alt={author}
      />
    )}
    <div className={nameAndDate}>
      <address>{author}</address>
      <time dateTime={format(new Date(date), "yyyy-MM-dd")}>
        {format(new Date(date), "MMM d")}
      </time>
    </div>
  </div>
);

const PostHeader = ({
  category,
  title,
  author,
  authorPhoto,
  date,
  categoryStyle,
}) => (
  <header className={postHeader}>
    <span
      className={postCategory}
      style={categoryStyle}
    >
      {category}
    </span>
    <h1 className={postTitle}>{title}</h1>
    <AuthorAndDateSection
      author={author}
      authorPhoto={authorPhoto}
      date={date}
    />
  </header>
);

const PostThumbnail = ({ thumbnail, alt }) => (
  <img
    className={postThumbnail}
    src={thumbnail}
    alt={alt}
  />
);

const RelatedPostCard = ({
  slug,
  rel,
  category,
  categoryStyle,
  title,
  label,
}) => (
  <Link
    rel={rel}
    to={`/blog/posts/${slug}`}
    className={relatedPostCard}
  >
    <span
      className={categoryInRelatedPost}
      style={categoryStyle}
    >
      {category}
    </span>
    <div className={titleInRelatedPost}>{title}</div>
    <div className={labelInRelatedPost}>{label}</div>
  </Link>
);

const StartNow = () => {
  const { t } = useI18next();

  return (
    <section className={startNowSection}>
      <span className={startNowTitle}>{t("blog:startNowTitle")}</span>
      <span className={startNowDesc}>{t("blog:startNowDescription")}</span>
      <AppDownloadLink>
        <button
          type="button"
          className={startNowButton}
        >
          {t("blog:startNowButton")}
        </button>
      </AppDownloadLink>
    </section>
  );
};

const parseBlocks = (blocks) => {
  try {
    return JSON.parse(blocks);
  } catch (error) {
    return {};
  }
};

const genCategoryStyle = (category) => (
  { backgroundColor: category.bgColor, color: category.textColor }
);

const RelatedPosts = ({ prevPostData, nextPostData }) => {
  const { t } = useI18next();
  const prevPostDataStyle = prevPostData && genCategoryStyle(prevPostData.category);
  const nextPostDataStyle = nextPostData && genCategoryStyle(nextPostData.category);

  return (
    <>
      <nav className={relatedPostsSection}>
        {prevPostData && (
          <RelatedPostCard
            rel="prev"
            slug={prevPostData.slug}
            title={prevPostData.title}
            category={prevPostData.category.name}
            categoryStyle={prevPostDataStyle}
            label={t("blog:prevPost")}
          />
        )}
        {nextPostData && (
          <RelatedPostCard
            rel="next"
            slug={nextPostData.slug}
            title={nextPostData.title}
            category={nextPostData.category.name}
            categoryStyle={nextPostDataStyle}
            label={t("blog:nextPost")}
          />
        )}
      </nav>
    </>
  );
};

export default function PostViewMobile({
  currentPostData,
  prevPostData,
  nextPostData,
}) {
  const {
    title, category, author, thumbnail, date, content,
  } = currentPostData;
  const categoryStyle = genCategoryStyle(category);
  const parsedBlocks = parseBlocks(content);

  return (
    <MobileLayout
      mainClassName={pageContainer}
      isFloatMenu={false}
      showPlatforms={false}
      showStartNow={false}
      hideFloatAppInstallButton
    >
      <LinkToListSection />
      <article className={postContainer}>
        <PostHeader
          title={title}
          category={category.name}
          author={author.name}
          authorPhoto={
            author.photo?.url
          }
          date={date}
          categoryStyle={categoryStyle}
        />
        {thumbnail && (
          <PostThumbnail
            thumbnail={thumbnail.url}
            alt={title}
          />
        )}
        <PostBody postBlocksContent={parsedBlocks} />
        <footer className={postFooter}>
          <StartNow />
          {(prevPostData || nextPostData) && (
            <RelatedPosts
              prevPostData={prevPostData}
              nextPostData={nextPostData}
            />
          )}
        </footer>
      </article>
    </MobileLayout>
  );
}
