import type { GetServerSideProps, NextPage } from 'next'
import { getPageByData, siteConfig } from './lib/sanity/queries'

import Head from 'next/head'
import Image from 'next/image'
import { getClient } from './lib/sanity'
import styles from '../styles/Home.module.css'

export default function Home (data: any) {
  console.log(data)

  return <div className={styles.container}></div>;
}


export const getServerSideProps: GetServerSideProps = async (context) => {
	const config = siteConfig();
	const paths = await getClient(false).fetch(config);
	const data = paths;
	const ref = data.frontpage._ref;
	const pageData = getPageByData('_id', ref, 0);
	const pages = await getClient(false).fetch(pageData);
	const payload = {
		config: data,
		pages
	};
	if (!data) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			data: payload
		} // will be passed to the page component as props
	};
};
