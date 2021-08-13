import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import { GatsbyImage } from "gatsby-plugin-image";
import { format } from "date-fns";
import * as constants from "../components/constants";
import { ExternalLinkWithQuery } from "../components/common";
import MobileLayout from "../components/mobile-layout";
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
  createdTime,
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
  relatedPostCardWrapper,
  postFooter,
} from "./mobile-postview.module.css";

const LinkToListSection = () => {
  return (
    <Link to={`/blog`} className={linkToListSection}>
      <img src={svgCompleteArrowPrev} alt="arrow-prev" />
      <span className={linkToListLabel}>블로그 리스트</span>
    </Link>
  );
};

const AuthorAndDateSection = ({ author, authorPhoto, date }) => {
  return (
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
          {format(new Date(date), "MMM d")}
        </time>
      </div>
    </div>
  );
};

const PostHeader = ({
  category,
  title,
  author,
  authorPhoto,
  date,
  categoryStyle,
}) => {
  return (
    <header className={postHeader}>
      <span className={postCategory} style={categoryStyle}>
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
};

const PostThumbnail = ({ thumbnail, alt }) => {
  return <GatsbyImage className={postThumbnail} image={thumbnail} alt={alt} />;
};

const RelatedPostCard = ({
  slug,
  rel,
  category,
  categoryStyle,
  title,
  label,
}) => {
  return (
    <Link rel={rel} to={`/blog/posts/${slug}`} className={relatedPostCard}>
      <span className={categoryInRelatedPost} style={categoryStyle}>
        {category}
      </span>
      <div className={titleInRelatedPost}>{title}</div>
      <div className={labelInRelatedPost}>{label}</div>
    </Link>
  );
};

const StartNow = () => {
  return (
    <section className={startNowSection}>
      <span className={startNowTitle}>재고관리의 시작, 박스히어로</span>
      <span className={startNowDesc}>
        한달 동안 모든 기능을 무료로 사용해 보세요!
      </span>
      <ExternalLinkWithQuery href={constants.urlStart}>
        <button className={startNowButton}>지금 무료로 시작하기</button>
      </ExternalLinkWithQuery>
    </section>
  );
};

const RelatedPosts = ({ categoryStyleMap, prevPostData, nextPostData }) => {
  return (
    <>
      <nav className={relatedPostsSection}>
        {prevPostData && (
          <RelatedPostCard
            rel="prev"
            slug={prevPostData.fields.slug}
            title={prevPostData.frontmatter.title}
            category={prevPostData.frontmatter.category}
            categoryStyle={categoryStyleMap[prevPostData.frontmatter.category]}
            label={`이전글`}
          />
        )}
        {nextPostData && (
          <RelatedPostCard
            rel="next"
            slug={nextPostData.fields.slug}
            title={nextPostData.frontmatter.title}
            category={nextPostData.frontmatter.category}
            categoryStyle={categoryStyleMap[nextPostData.frontmatter.category]}
            label={`다음글`}
          />
        )}
      </nav>
    </>
  );
};

export default function PostViewMobile({
  categoryStyleMap,
  currentPostData,
  prevPostData,
  nextPostData,
}) {
  const title = currentPostData.frontmatter.title;
  const category = currentPostData.frontmatter.category;
  const thumbnail =
    currentPostData.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData;

  return (
    <MobileLayout
      mainClassName={pageContainer}
      isFloatMenu={false}
      showEssentialOnly={true}
      hideFloatAppInstallButton={true}
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
          categoryStyle={categoryStyleMap[category]}
        />
        {thumbnail && <PostThumbnail thumbnail={thumbnail} alt={title} />}
        <PostBody postContentHTMLAst={currentPostData.htmlAst} />
        <footer className={postFooter}>
          <StartNow />
          {(prevPostData || nextPostData) && (
            <RelatedPosts
              categoryStyleMap={categoryStyleMap}
              prevPostData={prevPostData}
              nextPostData={nextPostData}
            />
          )}
        </footer>
      </article>
    </MobileLayout>
  );
}
