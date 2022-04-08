import React from "react";
import cn from "classnames";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { GatsbyImage } from "gatsby-plugin-image";
import MobileLayout from "./mobile-layout";
import svgArrowPrev from "../images/arrow-prev.svg";
import svgArrowNext from "../images/arrow-next.svg";
import {
  pageContainer,
  pageTitle,
  pageDescription,
  postList,
  postCardWrapper,
  postCard,
  thumbnailWrapper,
  thumbnailImage,
  postCardDetail,
  postCategory,
  postTitle,
  postDescription,
  paginationBar,
  navButtonGroup,
  navButton,
  prevButtonLabel,
  nextButtonLabel,
  aspectRatioBox,
  innerContentWrapper,
} from "./mobile-postlist.module.css";

const Pagination = ({ pathPrefix, pageIndex, lastPageIndex }) => {
  const { t } = useI18next();
  const canGoPrev = pageIndex >= 1;
  const canGoNext = lastPageIndex > pageIndex;
  const pageIndexReadable = pageIndex + 1;
  const lastPageIndexReadable = lastPageIndex + 1;

  return (
    <nav className={paginationBar}>
      <span>{`page ${pageIndexReadable} of ${lastPageIndexReadable}`}</span>
      {(canGoNext || canGoPrev) && (
        <section className={navButtonGroup}>
          <div>
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
                <span className={prevButtonLabel}>
                  {t("blog:prevPageLink")}
                </span>
              </Link>
            )}
          </div>

          <div>
            {canGoNext && (
              <Link
                rel="next"
                to={`${pathPrefix}/${pageIndex + 1}`}
                className={navButton}
              >
                <span className={nextButtonLabel}>
                  {t("blog:nextPageLink")}
                </span>
                <img
                  src={svgArrowNext}
                  alt="arrow-next"
                />
              </Link>
            )}
          </div>
        </section>
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
        // Safari에서 부모의 border-radius를 탈출하는 문제 수정
        imgStyle={{ borderTopLeftRadius: 6, borderTopRightRadius: 6 }}
      />
    )}
  </section>
);

const AspectRatioBox = ({
  className, widthRatio, heightRatio, children,
}) => {
  const calculatedPaddingTop = `${Math.round((heightRatio / widthRatio) * 100)}%`;
  return (
    <div
      className={cn(aspectRatioBox, className)}
      style={{
        paddingTop: calculatedPaddingTop,
      }}
    >
      <div className={innerContentWrapper}>
        {children}
      </div>
    </div>
  );
};

const PostCard = ({
  title,
  categoryStyle,
  category,
  description,
  path,
  thumbnail,
}) => (
  <AspectRatioBox
    className={postCardWrapper}
    widthRatio={4}
    heightRatio={5}
  >
    <Link
      to={path}
      className={postCard}
    >
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
    </Link>
  </AspectRatioBox>
);

export default function PostListMobile({
  title,
  description,
  pagePathPrefix,
  edges,
  pageIndex,
  lastPageIndex,
}) {
  return (
    <MobileLayout
      mainClassName={pageContainer}
      isFloatMenu={false}
      showPlatforms={false}
      showStartNow={false}
    >
      <h2 className={pageTitle}>{title}</h2>
      <p className={pageDescription}>{description}</p>
      <section className={postList}>
        {edges.map(({ node }) => {
          const { category } = node.frontmatter;
          const categoryStyle = JSON.parse(node.fields.categoryStyle);

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
              categoryStyle={categoryStyle}
            />
          );
        })}
      </section>
      <Pagination
        pathPrefix={pagePathPrefix}
        pageIndex={pageIndex}
        lastPageIndex={lastPageIndex}
      />
    </MobileLayout>
  );
}
