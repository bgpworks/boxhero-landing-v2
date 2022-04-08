import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { GatsbyImage } from "gatsby-plugin-image";
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
      <GatsbyImage
        image={authorPhoto}
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
  <GatsbyImage
    className={postThumbnail}
    image={thumbnail}
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

const RelatedPosts = ({ prevPostData, nextPostData }) => {
  const { t } = useI18next();
  const prevPostDataStyle = prevPostData && JSON.parse(prevPostData.fields.categoryStyle);
  const nextPostDataStyle = nextPostData && JSON.parse(nextPostData.fields.categoryStyle);

  return (
    <>
      <nav className={relatedPostsSection}>
        {prevPostData && (
          <RelatedPostCard
            rel="prev"
            slug={prevPostData.fields.slug}
            title={prevPostData.frontmatter.title}
            category={prevPostData.frontmatter.category}
            categoryStyle={prevPostDataStyle}
            label={t("blog:prevPost")}
          />
        )}
        {nextPostData && (
          <RelatedPostCard
            rel="next"
            slug={nextPostData.fields.slug}
            title={nextPostData.frontmatter.title}
            category={nextPostData.frontmatter.category}
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
  const { title } = currentPostData.frontmatter;
  const { category } = currentPostData.frontmatter;
  const categoryStyle = JSON.parse(currentPostData.fields.categoryStyle);
  const thumbnail = currentPostData.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData;

  return (
    <MobileLayout
      mainClassName={pageContainer}
      isFloatMenu={false}
      showPlatforms={false}
      showStartNow={false}
    >
      <LinkToListSection />
      <article className={postContainer}>
        <PostHeader
          title={title}
          category={category}
          author={currentPostData.frontmatter.author}
          authorPhoto={
            currentPostData.frontmatter?.authorPhoto?.childImageSharp
              ?.gatsbyImageData
          }
          date={currentPostData.fields.date}
          categoryStyle={categoryStyle}
        />
        {thumbnail && (
          <PostThumbnail
            thumbnail={thumbnail}
            alt={title}
          />
        )}
        <PostBody postContentHTMLAst={currentPostData.htmlAst} />
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
