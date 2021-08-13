import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import { GatsbyImage } from "gatsby-plugin-image";
import MobileLayout from "../components/mobile-layout";
import svgArrowPrev from "../images/arrow-prev.svg";
import svgArrowNext from "../images/arrow-next.svg";
import {
  pageContainer,
  pageTitle,
  pageDescription,
  postList,
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
} from "./mobile-postlist.module.css";

const Pagination = ({ pathPrefix, pageIndex, lastPageIndex }) => {
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
                <img src={svgArrowPrev} alt="arrow-prev" />
                <span className={prevButtonLabel}>이전</span>
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
                <span className={nextButtonLabel}>다음</span>
                <img src={svgArrowNext} alt="arrow-next" />
              </Link>
            )}
          </div>
        </section>
      )}
    </nav>
  );
};

const PostCardThumbnail = ({ thumbnail, alt }) => {
  return (
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
};

const PostCard = ({
  title,
  categoryStyle,
  category,
  description,
  path,
  thumbnail,
}) => {
  return (
    <Link to={path} className={postCard}>
      <PostCardThumbnail thumbnail={thumbnail} alt={description} />
      <section className={postCardDetail}>
        <span className={postCategory} style={categoryStyle}>
          {category}
        </span>
        <h3 className={postTitle}>{title}</h3>
        <span className={postDescription}>{description}</span>
      </section>
    </Link>
  );
};

export default function PostListMobile({
  title,
  description,
  pagePathPrefix,
  edges,
  pageIndex,
  lastPageIndex,
  categoryStyleMap,
}) {
  return (
    <MobileLayout
      mainClassName={pageContainer}
      isFloatMenu={false}
      showEssentialOnly={true}
      hideFloatAppInstallButton={true}
    >
      <h2 className={pageTitle}>{title}</h2>
      <p className={pageDescription}>{description}</p>
      <section className={postList}>
        {edges.map(({ node }) => {
          const category = node.frontmatter.category;

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
      </section>
      <Pagination
        pathPrefix={pagePathPrefix}
        pageIndex={pageIndex}
        lastPageIndex={lastPageIndex}
      />
    </MobileLayout>
  );
}