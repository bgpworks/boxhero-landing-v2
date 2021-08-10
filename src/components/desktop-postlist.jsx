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
      {!canGoPrev ? (
        <div></div>
      ) : (
        <Link to={`${pathPrefix}/${pageIndex - 1}`}>
          <div className={navButton}>
            <img src={svgArrowPrev} />
            <span className={prevButtonLabel}>이전</span>
          </div>
        </Link>
      )}

      <span>{`page ${pageIndexReadable} of ${lastPageIndexReadable}`}</span>

      {!canGoNext ? (
        <div></div>
      ) : (
        <Link to={`${pathPrefix}/${pageIndex + 1}`}>
          <div className={navButton}>
            <span className={nextButtonLabel}>다음</span>
            <img src={svgArrowNext} />
          </div>
        </Link>
      )}
    </div>
  );
};

const PostCard = ({ title, category, description, path, thumbnail }) => {
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
            <span className={postCategory} style={categoryColorMap}>
              {category}
            </span>
            <h3 className={postTitle}>{title}</h3>
            <span className={postDescription}>{description}</span>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default function PostListDesktop({
  edges,
  t,
  pageIndex,
  lastPageIndex,
}) {
  return (
    <DesktopLayout isFloatMenu={false} hideStartNow={true}>
      <section className={pageContainer}>
        <h2 className={pageTitle}>블로그</h2>
        <p className={pageDescription}>이 세상 모든 재고관리 팀과 아이디어들</p>
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
              description={node.frontmatter.description}
              path={`/blog/posts/${node.fields.slug}`}
            />
          ))}
        </section>
        <Pagination
          pathPrefix={`/blog/pages`}
          pageIndex={pageIndex}
          lastPageIndex={lastPageIndex}
        />
      </section>
    </DesktopLayout>
  );
}
