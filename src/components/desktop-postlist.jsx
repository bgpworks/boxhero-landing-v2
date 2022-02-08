import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
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
      <img
        src={thumbnail}
        alt={alt}
        className={thumbnailImage}
        // Safari에서 부모의 border-radius를 탈출하는 문제 수정
        style={{ borderTopLeftRadius: 6, borderTopRightRadius: 6 }}
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
}) {
  return (
    <DesktopLayout
      mainClassName={pageContainer}
      isFloatMenu={false}
      showPlatforms={false}
      showStartNow={false}
    >
      <h2 className={pageTitle}>{title}</h2>
      <p className={pageDescription}>{description}</p>
      <ul className={postList}>
        {edges.map(({ node }) => {
          const { category } = node;
          const categoryStyle = { backgroundColor: category.bgColor, color: category.textColor };

          return (
            <PostCard
              key={node.slug}
              thumbnail={
                node.thumbnail?.url
              }
              title={node.title}
              category={category.name}
              description={node.description}
              path={`/blog/posts/${node.slug}`}
              categoryStyle={categoryStyle}
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
