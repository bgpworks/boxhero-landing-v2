import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import { GatsbyImage } from "gatsby-plugin-image";
import { genRandomColorStyleMap } from "../util";
import DesktopLayout from "../components/desktop-layout";
import svgArrowPrev from "../images/arrow-prev.svg";
import svgArrowNext from "../images/arrow-next.svg";
import {
  pageContainer,
  pageTitle,
  pageDescription,
  postList,
  postCard,
  postCardWrapper,
  thumbnailWrapper,
  postCardDetail,
  postCategory,
  postTitle,
  postDescription,
  paginationBar,
  navButton,
  prevButtonLabel,
  nextButtonLabel,
} from "./desktop-postlist.module.css";

const Pagination = ({ pathPrefix, pageIndex, lastPageIndex }) => {
  const canGoPrev = pageIndex >= 1;
  const canGoNext = lastPageIndex > pageIndex;
  const pageIndexReadable = pageIndex + 1;
  const lastPageIndexReadable = lastPageIndex + 1;

  return (
    <div className={paginationBar}>
      {canGoPrev && (
        <Link to={`${pathPrefix}/${pageIndex - 1}`} className={navButton}>
          <img src={svgArrowPrev} />
          <span className={prevButtonLabel}>이전</span>
        </Link>
      )}

      <span>{`page ${pageIndexReadable} of ${lastPageIndexReadable}`}</span>

      {canGoNext && (
        <Link to={`${pathPrefix}/${pageIndex + 1}`} className={navButton}>
          <span className={nextButtonLabel}>다음</span>
          <img src={svgArrowNext} />
        </Link>
      )}
    </div>
  );
};

const PostCard = ({
  title,
  category,
  categorySlug,
  description,
  path,
  thumbnail,
}) => {
  const categoryColorMap = genRandomColorStyleMap(category);

  return (
    <div className={postCardWrapper}>
      <Link to={path}>
        <article className={postCard}>
          <GatsbyImage
            image={thumbnail}
            className={thumbnailWrapper}
            alt={description}
          />
          <div className={postCardDetail}>
            <Link
              to={`/blog/categories/${categorySlug}`}
              className={postCategory}
              style={categoryColorMap}
            >
              {category}
            </Link>
            <h3 className={postTitle}>{title}</h3>
            <span className={postDescription}>{description}</span>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default function PostListDesktop({
  title,
  description,
  pagePathPrefix,
  edges,
  pageIndex,
  lastPageIndex,
}) {
  return (
    <DesktopLayout isFloatMenu={false} hideStartNow={true}>
      <section className={pageContainer}>
        <h2 className={pageTitle}>{title}</h2>
        <p className={pageDescription}>{description}</p>
        <section className={postList}>
          {edges.map(({ node }) => (
            <PostCard
              key={node.fields.slug}
              thumbnail={
                node.frontmatter.thumbnail &&
                node.frontmatter.thumbnail.childImageSharp.gatsbyImageData
              }
              title={node.frontmatter.title}
              category={node.frontmatter.category}
              categorySlug={node.fields.categorySlug}
              description={node.frontmatter.description}
              path={`/blog/posts/${node.fields.slug}`}
            />
          ))}
        </section>
        <Pagination
          pathPrefix={pagePathPrefix}
          pageIndex={pageIndex}
          lastPageIndex={lastPageIndex}
        />
      </section>
    </DesktopLayout>
  );
}
