import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

const FeatureList = [
    {
        title: 'Easy to Use',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A commodi consequatur dicta dignissimos dolor
                dolorem iusto, minus mollitia nemo perferendis perspiciatis quisquam tenetur?
            </>
        ),
    },
    {
        title: 'Focus on What Matters',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium asperiores dolore expedita hic
                neque pariatur ratione, temporibus unde vero consectetur adipisicing elit.
            </>
        ),
    },
    {
        title: 'Powered by React',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Alias aliquam dignissimos dolorem esse est exercitationem explicabo officia
                quae, repellendus repudiandae sit, suscipit velit veniam vero voluptatum?
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
            <div className="">
                <h3 className="font-bold size-md">{title}</h3>
                <p>{description}</p>
            </div>
    );
}

export default function FrontendBackend() {
    return (
        <section className="px-4 sm:px-16 py-32 bg-white/5">
            <article className="flex flex-col gap-4" id="fontend-solutions">
                <h1 className="text-2xl font-bold mb-4">
                    Frontend solutions
                </h1>
                <div className="flex gap-16 flex-col sm:flex-row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </article>
        </section>
    );
}
