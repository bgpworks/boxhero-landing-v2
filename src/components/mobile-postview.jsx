import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import { GatsbyImage } from "gatsby-plugin-image";
import { format } from "date-fns";
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
      </article>
    </MobileLayout>
  );
}
