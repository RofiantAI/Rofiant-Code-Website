<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Terms — Rofiant Code"
	description="Terms for using Rofiant Code, its source license, and the optional Rofiant sign-in."
	path="/terms"
/>

<Navbar />

<main class="shell py-16 md:py-20">
	<header class="max-w-2xl">
		<h1
			class="font-(family-name:--font-display) text-[clamp(2rem,4vw,2.75rem)] leading-[1.1] text-(--color-ink)"
		>
			Terms
		</h1>
		<p class="mt-3 text-[15px] leading-relaxed text-(--color-ink-soft)">
			Last updated August 30, 2026.
		</p>
	</header>

	<article class="mt-14 flex max-w-2xl flex-col gap-12">
		<section>
			<h2 class="font-(family-name:--font-display) text-[1.6rem] text-(--color-ink)">
				The software
			</h2>
			<p class="mt-3 text-[15px] leading-relaxed text-(--color-ink-soft)">
				Rofiant Code's source is licensed under the <a
					href="https://github.com/RofiantAI/Rofiant-Code/blob/main/LICENSE"
					target="_blank"
					rel="noreferrer"
					class="underline decoration-(--color-border-hover) underline-offset-2 hover:text-(--color-ink)"
					>GNU General Public License v3.0</a
				>. It is provided as is, without warranty of any kind, as stated in that license. You are
				responsible for reviewing changes it proposes before approving them, and for the commands it
				runs on your machine.
			</p>
		</section>

		<section>
			<h2 class="font-(family-name:--font-display) text-[1.6rem] text-(--color-ink)">
				Model providers
			</h2>
			<p class="mt-3 text-[15px] leading-relaxed text-(--color-ink-soft)">
				Rofiant Code is bring-your-own-key: you supply the API key for an OpenAI-compatible
				provider, and its own terms and pricing govern your use of it. Rofiant does not resell or
				mark up provider usage, and it does not use ChatGPT or Claude consumer subscriptions to
				access those providers.
			</p>
		</section>

		<section>
			<h2 class="font-(family-name:--font-display) text-[1.6rem] text-(--color-ink)">
				Signing in with Rofiant
			</h2>
			<p class="mt-3 text-[15px] leading-relaxed text-(--color-ink-soft)">
				Signing in through <code
					class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[13px]"
					>/login</code
				>
				is optional and routes requests through a relay Rofiant operates, described on the
				<a
					href="/privacy"
					class="underline decoration-(--color-border-hover) underline-offset-2 hover:text-(--color-ink)"
					>Privacy page</a
				>. Rofiant may rate-limit, suspend, or discontinue that relay at any time, including for
				abuse of the underlying provider.
			</p>
		</section>

		<section>
			<h2 class="font-(family-name:--font-display) text-[1.6rem] text-(--color-ink)">
				Acceptable use
			</h2>
			<p class="mt-3 text-[15px] leading-relaxed text-(--color-ink-soft)">
				Do not use Rofiant Code, or the Rofiant sign-in relay, to violate the law, another party's
				rights, or the terms of the underlying model provider.
			</p>
		</section>

		<section>
			<h2 class="font-(family-name:--font-display) text-[1.6rem] text-(--color-ink)">Changes</h2>
			<p class="mt-3 text-[15px] leading-relaxed text-(--color-ink-soft)">
				These terms may change as the project changes. Material changes will appear on this page
				with an updated date above.
			</p>
		</section>
	</article>
</main>

<Footer />
