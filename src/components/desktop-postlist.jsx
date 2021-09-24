import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { GatsbyImage } from "gatsby-plugin-image";
import DesktopLayout from "./desktop-layout";
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
  const { t } = useI18next();
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
          <img
            src={svgArrowPrev}
            alt="arrow-prev"
          />
          <span className={prevButtonLabel}>{t("blog:prevPageLink")}</span>
        </Link>
      )}

      <span>{`page ${pageIndexReadable} of ${lastPageIndexReadable}`}</span>

      {canGoNext && (
        <Link
          rel="next"
          to={`${pathPrefix}/${pageIndex + 1}`}
          className={navButton}
        >
          <span className={nextButtonLabel}>{t("blog:nextPageLink")}</span>
          <img
            src={svgArrowNext}
            alt="arrow-next"
          />
        </Link>
      )}
    </nav>
  );
};

const PostCardThumbnail = ({ thumbnail, alt }) => (
  <section className={thumbnailWrapper}>
    {thumbnail && (
    <GatsbyImage
      image={thumbnail}
      alt={alt}
      className={thumbnailImage}
    />
    )}
  </section>
);

const PostCard = ({
  title,
  categoryStyle,
  category,
  description,
  path,
  thumbnail,
}) => (
  <li className={postCardWrapper}>
    <Link to={path}>
      <article className={postCard}>
        <PostCardThumbnail
          thumbnail={thumbnail}
          alt={description}
        />

        <section className={postCardDetail}>
          <span
            className={postCategory}
            style={categoryStyle}
          >
            {category}
          </span>
          <h3 className={postTitle}>{title}</h3>
          <span className={postDescription}>{description}</span>
        </section>
      </article>
    </Link>
  </li>
);

export default function PostListDesktop({
  title,
  description,
  pagePathPrefix,
  edges,
  pageIndex,
  lastPageIndex,
  categoryStyleMap,
}) {
  return (
    <DesktopLayout
      mainClassName={pageContainer}
      isFloatMenu={false}
      showEssential
    >
      <h2 className={pageTitle}>{title}</h2>
      <p className={pageDescription}>{description}</p>
      <ul className={postList}>
        {edges.map(({ node }) => {
          const { category } = node.frontmatter;

          return (
            <PostCard
              key={node.fields.slug}
              thumbnail={
                node.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData
              }
              title={node.frontmatter.title}
              category={category}
              description={node.frontmatter.description}
              path={`/blog/posts/${node.fields.slug}`}
              categoryStyle={categoryStyleMap[category]}
            />
          );
        })}
      </ul>
      <Pagination
        pathPrefix={pagePathPrefix}
        pageIndex={pageIndex}
        lastPageIndex={lastPageIndex}
      />
    </DesktopLayout>
  );
}
