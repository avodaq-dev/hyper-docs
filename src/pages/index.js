import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import FrontendBackend from '@site/src/components/FrontendBackend';
import {useColorMode} from '@docusaurus/theme-common';

import ReLogoColor from "@avo/monorepo/doku_libs/static/img/rescoped_logo_color.svg";
import ReLogoWhite from "@avo/monorepo/doku_libs/static/img/rescoped_logo_white.svg";
import {Fade} from "react-awesome-reveal";
import {fadeProps} from "@avo/monorepo/doku_libs/reveal_animations/fadeAnimation";


function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    const {isDarkTheme} = useColorMode();
    const darkTheme = isDarkTheme ? 'bg-avo-pink-pink' : 'bg-avo-pink-50';
    const darkThemehide = isDarkTheme ? 'hidden' : '';
    const lightThemehide = !isDarkTheme ? 'hidden' : '';

    return (
            <header className={clsx('px-4 sm:px-16 py-32', darkTheme)}>
                <div className="flex flex-col gap-4">

                <Fade {...fadeProps}>
                        <div>
                            <ReLogoColor width="120" title="rescoped Logo" className={clsx('logo ', darkThemehide)}/>
                            <ReLogoWhite width="120" title="rescoped Logo" className={clsx('logo', lightThemehide)}/>
                        </div>
                        <h1 className="text-5xl font-bold">{siteConfig.title}</h1>
                    <p className="text-xl font-bold mb-4">{siteConfig.tagline}</p>
                </Fade>

            </div>
        </header>

    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <FrontendBackend/>
            </main>
        </Layout>
    );
}
