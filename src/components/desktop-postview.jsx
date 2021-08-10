import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import { GatsbyImage } from "gatsby-plugin-image";
import DesktopLayout from "../components/desktop-layout";
import svgCompleteArrowPrev from "../images/complete-arrow-prev.svg";
import {
  pageContainer,
  postView,
  postHeaderSection,
  postFooterSection,
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
} from "./desktop-postview.module.css";

const LinkToListSection = () => {
  return (
    <section className={linkToListSection}>
      <Link to={`/blog/pages/0`}>
        <img src={svgCompleteArrowPrev} />
        <span className={linkToListLabel}>블로그 리스트</span>
      </Link>
    </section>
  );
};

const PostHeader = ({ category, title }) => {
  return (
    <section className={postHeaderSection}>
      <span className={postCategory}>{category}</span>
      <h1 className={postTitle}>{title}</h1>
    </section>
  );
};

const PostThumbnail = ({ thumbnailData }) => {
  return <GatsbyImage className={postThumbnail} image={thumbnailData} />;
};

const PostView = ({ postContentInHTML }) => {
  return (
    <article
      className={postView}
      dangerouslySetInnerHTML={{ __html: postContentInHTML }}
    />
  );
};

const RelatedPostCard = ({ slug, category, title, label }) => {
  return (
    <Link to={`/blog/posts/${slug}`} className={relatedPostCard}>
      <span className={categoryInRelatedPost}>{category}</span>
      <div className={titleInRelatedPost}>{title}</div>
      <div className={labelInRelatedPost}>{label}</div>
    </Link>
  );
};

const PostFooter = ({ prevPostData, nextPostData }) => {
  return (
    <section className={postFooterSection}>
      <div className={relatedPostCardWrapper}>
        {prevPostData && (
          <RelatedPostCard
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
            slug={nextPostData.fields.slug}
            title={nextPostData.frontmatter.title}
            category={nextPostData.frontmatter.category}
            label={`다음글`}
          />
        )}
      </div>
    </section>
  );
};

export default function DesktopPostView({
  currentPostData,
  prevPostData,
  nextPostData,
}) {
  return (
    <DesktopLayout isFloatMenu={false} hideStartNow={true}>
      <div className={pageContainer}>
        <LinkToListSection />
        <PostHeader
          title={currentPostData.frontmatter.title}
          category={currentPostData.frontmatter.category}
        />
        {postThumbnail && (
          <PostThumbnail
            thumbnailData={
              currentPostData.frontmatter.thumbnail.childImageSharp
                .gatsbyImageData
            }
          />
        )}
        <PostView postContentInHTML={currentPostData.html} />
        <PostFooter prevPostData={prevPostData} nextPostData={nextPostData} />
      </div>
    </DesktopLayout>
  );
}
