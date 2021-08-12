import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import { GatsbyImage } from "gatsby-plugin-image";
import DesktopLayout from "../components/desktop-layout";
import { format } from "date-fns";
import { genRandomColorStyleMap } from "../util";
import { ExternalLinkWithQuery } from "../components/common";
import * as constants from "../components/constants";
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
import PostBody from "./PostBody";

const LinkToListSection = () => {
  return (
    <section className={linkToListSection}>
      <Link to={`/blog`}>
        <img src={svgCompleteArrowPrev} alt="arrow-prev" />
        <span className={linkToListLabel}>블로그 리스트</span>
      </Link>
    </section>
  );
};

const AuthorAndDateSection = ({ author, authorPhoto, date }) => {
  return (
    <div className={authorSection}>
      <GatsbyImage
        image={authorPhoto}
        className={authorPhotoWrapper}
        alt={author}
      />
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
};

const PostHeader = ({ category, title, author, authorPhoto, date }) => {
  const categoryStyle = genRandomColorStyleMap(category);

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

const PostThumbnail = ({ thumbnailData }) => {
  return <GatsbyImage className={postThumbnail} image={thumbnailData} />;
};

const RelatedPostCard = ({ slug, rel, category, title, label }) => {
  const categoryStyle = genRandomColorStyleMap(category);

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

const PostFooter = ({ prevPostData, nextPostData }) => {
  return (
    <footer className={postFooter}>
      <StartNow />
      <nav className={postFooterSection}>
        <div className={relatedPostCardWrapper}>
          {prevPostData && (
            <RelatedPostCard
              rel="prev"
              slug={prevPostData.fields.slug}
              title={prevPostData.frontmatter.title}
              category={prevPostData.frontmatter.category}
              label={`이전글`}
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
              label={`다음글`}
            />
          )}
        </div>
      </nav>
    </footer>
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

export default function DesktopPostView({
  currentPostData,
  prevPostData,
  nextPostData,
}) {
  return (
    <DesktopLayout
      mainClassName={pageContainer}
      isFloatMenu={false}
      showEssential={true}
    >
      <LinkToListSection />
      <article className={postContainer}>
        <PostHeader
          title={currentPostData.frontmatter.title}
          category={currentPostData.frontmatter.category}
          author={currentPostData.frontmatter.author}
          authorPhoto={
            currentPostData.frontmatter.authorPhoto.childImageSharp
              .gatsbyImageData
          }
          date={currentPostData.fields.date}
        />
        {postThumbnail && (
          <PostThumbnail
            thumbnailData={
              currentPostData.frontmatter.thumbnail.childImageSharp
                .gatsbyImageData
            }
          />
        )}
        <PostBody postContentHTMLAst={currentPostData.htmlAst} />
        {(prevPostData || nextPostData) && (
          <PostFooter prevPostData={prevPostData} nextPostData={nextPostData} />
        )}
      </article>
    </DesktopLayout>
  );
}
