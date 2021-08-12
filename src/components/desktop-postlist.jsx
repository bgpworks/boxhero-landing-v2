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
  thumbnailImage,
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
    <nav className={paginationBar}>
      {canGoPrev && (
        <Link
          rel="prev"
          to={`${pathPrefix}/${pageIndex - 1}`}
          className={navButton}
        >
          <img src={svgArrowPrev} alt="arrow-prev" />
          <span className={prevButtonLabel}>이전</span>
        </Link>
      )}

      <span>{`page ${pageIndexReadable} of ${lastPageIndexReadable}`}</span>

      {canGoNext && (
        <Link
          rel="next"
          to={`${pathPrefix}/${pageIndex + 1}`}
          className={navButton}
        >
          <span className={nextButtonLabel}>다음</span>
          <img src={svgArrowNext} alt="arrow-next" />
        </Link>
      )}
    </nav>
  );
};

const PostCard = ({ title, category, description, path, thumbnail }) => {
  const categoryColorMap = genRandomColorStyleMap(category);

  return (
    <li className={postCardWrapper}>
      <Link to={path}>
        <article className={postCard}>
          <section
            className={thumbnailWrapper}
            style={{ backgroundColor: categoryColorMap.backgroundColor }}
          >
            <GatsbyImage
              image={thumbnail}
              alt={description}
              className={thumbnailImage}
            />
          </section>

          <section className={postCardDetail}>
            <span className={postCategory} style={categoryColorMap}>
              {category}
            </span>
            <h3 className={postTitle}>{title}</h3>
            <span className={postDescription}>{description}</span>
          </section>
        </article>
      </Link>
    </li>
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
    <DesktopLayout
      mainClassName={pageContainer}
      isFloatMenu={false}
      showEssential={true}
    >
      <h2 className={pageTitle}>{title}</h2>
      <p className={pageDescription}>{description}</p>
      <ul className={postList}>
        {edges.map(({ node }) => (
          <PostCard
            key={node.fields.slug}
            thumbnail={
              node.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData
            }
            title={node.frontmatter.title}
            category={node.frontmatter.category}
            description={node.frontmatter.description}
            path={`/blog/posts/${node.fields.slug}`}
          />
        ))}
      </ul>
      <Pagination
        pathPrefix={pagePathPrefix}
        pageIndex={pageIndex}
        lastPageIndex={lastPageIndex}
      />
    </DesktopLayout>
  );
}
