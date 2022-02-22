import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { format } from "date-fns";
import * as constants from "./constants";
import { ExternalLinkWithQuery } from "./common";
import DesktopLayout from "./desktop-layout";
import PostBody from "./desktop-postbody";
import svgCompleteArrowPrev from "../images/complete-arrow-prev.svg";
import {
  pageContainer,
  postContainer,
  postFooterSection,
  postHeader,
  postFooter,
  postCategory,
  postTitle,
  postThumbnail,
  linkToListSection,
  linkToListLabel,
  relatedPostCardWrapper,
  relatedPostCard,
  categoryInRelatedPost,
  titleInRelatedPost,
  labelInRelatedPost,
  authorSection,
  authorPhotoWrapper,
  nameAndDate,
  createdTime,
  startNowSection,
  startNowTitle,
  startNowDesc,
  startNowButton,
} from "./desktop-postview.module.css";

const LinkToListSection = () => {
  const { t } = useI18next();

  return (
    <section className={linkToListSection}>
      <Link to="/blog">
        <img
          src={svgCompleteArrowPrev}
          alt="arrow-prev"
        />
        <span className={linkToListLabel}>{t("blog:linkToList")}</span>
      </Link>
    </section>
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
      <time
        dateTime={format(new Date(date), "yyyy-MM-dd")}
        className={createdTime}
      >
        {format(new Date(date), "PPP")}
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
      <ExternalLinkWithQuery href={constants.urlStart}>
        <button
          type="button"
          className={startNowButton}
        >
          {t("blog:startNowButton")}
        </button>
      </ExternalLinkWithQuery>
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

const PostFooter = ({ prevPostData, nextPostData }) => {
  const { t } = useI18next();
  const prevPostDataStyle = prevPostData && genCategoryStyle(prevPostData.category);
  const nextPostDataStyle = nextPostData && genCategoryStyle(nextPostData.category);

  return (
    <>
      <nav className={postFooterSection}>
        <div className={relatedPostCardWrapper}>
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
        </div>
        <div className={relatedPostCardWrapper}>
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
        </div>
      </nav>
    </>
  );
};

export default function DesktopPostView({
  currentPostData,
  prevPostData,
  nextPostData,
}) {
  const {
    title, category, thumbnail, author, date, content,
  } = currentPostData;
  const categoryStyle = genCategoryStyle(category);
  const parsedBlocks = parseBlocks(content.data.content);

  return (
    <DesktopLayout
      mainClassName={pageContainer}
      isFloatMenu={false}
      showPlatforms={false}
      showStartNow={false}
    >
      <LinkToListSection />
      <article className={postContainer}>
        <PostHeader
          title={title}
          category={category.name}
          author={author.name}
          authorPhoto={author.photo?.url}
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
            <PostFooter
              prevPostData={prevPostData}
              nextPostData={nextPostData}
            />
          )}
        </footer>
      </article>
    </DesktopLayout>
  );
}
