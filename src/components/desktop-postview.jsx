import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { GatsbyImage } from "gatsby-plugin-image";
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
    <GatsbyImage
      image={authorPhoto}
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

const PostFooter = ({ categoryStyleMap, prevPostData, nextPostData }) => {
  const { t } = useI18next();

  return (
    <>
      <nav className={postFooterSection}>
        <div className={relatedPostCardWrapper}>
          {prevPostData && (
            <RelatedPostCard
              rel="prev"
              slug={prevPostData.fields.slug}
              title={prevPostData.frontmatter.title}
              category={prevPostData.frontmatter.category}
              categoryStyle={
                categoryStyleMap[prevPostData.frontmatter.category]
              }
              label={t("blog:prevPost")}
            />
          )}
        </div>
        <div className={relatedPostCardWrapper}>
          {nextPostData && (
            <RelatedPostCard
              rel="next"
              slug={nextPostData.fields.slug}
              title={nextPostData.frontmatter.title}
              category={nextPostData.frontmatter.category}
              categoryStyle={
                categoryStyleMap[nextPostData.frontmatter.category]
              }
              label={t("blog:nextPost")}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default function DesktopPostView({
  categoryStyleMap,
  currentPostData,
  prevPostData,
  nextPostData,
}) {
  const { frontmatter, htmlAst, fields: { date } } = currentPostData;
  const {
    title, category, thumbnail, author, authorPhoto,
  } = frontmatter;

  return (
    <DesktopLayout
      mainClassName={pageContainer}
      isFloatMenu={false}
      showEssential
    >
      <LinkToListSection />
      <article className={postContainer}>
        <PostHeader
          title={title}
          category={category}
          author={author}
          authorPhoto={authorPhoto?.childImageSharp?.gatsbyImageData}
          date={date}
          categoryStyle={categoryStyleMap[category]}
        />
        {thumbnail && (
        <PostThumbnail
          thumbnail={thumbnail?.childImageSharp?.gatsbyImageData}
          alt={title}
        />
        )}
        <PostBody postContentHTMLAst={htmlAst} />
        <footer className={postFooter}>
          <StartNow />
          {(prevPostData || nextPostData) && (
            <PostFooter
              categoryStyleMap={categoryStyleMap}
              prevPostData={prevPostData}
              nextPostData={nextPostData}
            />
          )}
        </footer>
      </article>
    </DesktopLayout>
  );
}
