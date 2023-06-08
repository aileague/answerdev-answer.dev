import React, { memo } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import { generateCategoryPath } from '@site/src/utils';
// @ts-ignore
import {useBlogPost} from '@docusaurus/theme-common/internal';
import styles from './index.module.css';

const BlogPostItemHeader = () => {
  const { frontMatter, metadata } = useBlogPost();

  console.log('frontMatter', metadata);
   return (
    <>
      <header className='col col-b col--7'>
        <div className={styles.nav}>
          <Link to='/blog' className="margin-right--sm">
            <Translate id="blogHeader.title">
              Blog
            </Translate>
          </Link>
          <span className="margin-right--sm">/</span>
          <Link
            to={generateCategoryPath(frontMatter.category)} className="margin-right--sm">
              <Translate id={frontMatter.category}>
                {frontMatter.category}
              </Translate>
          </Link>
        </div>
        <h1 className={styles.h1}>
          <Link to={metadata.permalink} className={styles.title}>
            {metadata.title}
          </Link>
        </h1>

        <div className={clsx('text-secondary', styles.info)}>
          {metadata.authors.map((author) => {
            return (
              <div
                className='margin-right--md'
                key={author.name}>
                  {author.name}
              </div>
            )
          })}
            <time className='margin-right--md' dateTime={metadata.date}>
              {metadata.formattedDate}
            </time>
            <div>
              <Translate id="blogPostItem.readingTime" values={{
                reading_time: metadata.readingTime
              }}>
                {'{reading_time} min read'}
              </Translate>
            </div>
        </div>
      </header>
      <div className='col col-b col--8 mt-5 mb-5'>
        <img
          src={require(`@site/static/img/blog/${frontMatter.image.replace('@2x', '@4x')}`).default} alt=""
          width="100%" />
      </div>
    </>
   )
}

export default memo(BlogPostItemHeader)