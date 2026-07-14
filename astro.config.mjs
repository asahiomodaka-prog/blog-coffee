// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/blog/epeios-電気ケトルで淹れる一杯香りが日常を彩る自宅の至福コーヒー術': '/blog/epeios-electric-kettle-home-coffee',
		'/blog/guramuで毎日淹れたてを味わう贅沢香りとコクが私のコーヒー生活を豊かにする理由': '/blog/guramu-luxury-fresh-coffee',
		'/blog/どこでも挽きたてコードレス臼式電動コーヒーミルが叶える私だけの贅沢な香り': '/blog/cordless-burr-coffee-grinder',
		'/blog/デロンギ-ラスペシャリスタプレスティージオで豆から香る私の至福カフェ時間': '/blog/delonghi-la-specialista-prestigio',
		'/blog/ドリップコーヒーファクトリー淡路島アソート3種飲み比べが叶える我が家の贅沢カフェ時間': '/blog/awajishima-drip-coffee-3-mix',
		'/blog/一杯の贅沢珈琲考具-ワンドリッパーでゆっくり味わう豊かなコーヒー暮らし': '/blog/kohiki-kogu-one-dripper',
		'/blog/加藤珈琲店-しゃちブレンド2種豆のまま挽く悦び違いを楽しむ大人の珈琲時間': '/blog/kato-coffee-shachi-blend-2',
		'/blog/加藤珈琲店-しゃちブレンドが香る朝深煎りのコクと私が選んだ日常の至福': '/blog/kato-coffee-shachi-blend-dark-roast',
		'/blog/多くのコーヒー愛好家が唸るステンレスドリッパーが紡ぐペーパーレスな至福の香り': '/blog/paperless-stainless-dripper',
		'/blog/波佐見焼cofilで深めるコーヒーの愉しみペーパーレスが叶える至福の味覚体験': '/blog/cofil-paperless-coffee',
		'/blog/深煎りブラジル400gで始める自宅カフェの贅沢豆選びのこだわりと至福の一杯': '/blog/brazil-deep-roast-home-cafe',
		'/blog/至福の香りが広がるゴールド-ブレンド-プレミアムシリーズで始めるこだわりのコーヒー暮らし': '/blog/gold-blend-premium-series-coffee',
	},
	site: 'https://coffeegurasi.ariawriter.com',
	integrations: [mdx(), sitemap()],
	image: {
		domains: [
			'thumbnail.image.rakuten.co.jp',
			'ebook-assets.dmm.com',
			'pics.dmm.co.jp',
			'pics.dmm.com'
		]
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
