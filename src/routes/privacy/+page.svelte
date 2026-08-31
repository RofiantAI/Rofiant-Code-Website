<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Privacy — Rofiant Code"
	description="What Rofiant Code sends to your model provider, what stays on your machine, and what this website collects."
	path="/privacy"
/>

<Navbar />

<main class="shell py-16 md:py-20">
	<header class="max-w-2xl">
		<h1
			class="font-(family-name:--font-display) text-[clamp(2rem,4vw,2.75rem)] leading-[1.1] text-(--color-ink)"
		>
			Privacy
		</h1>
		<p class="mt-3 text-[15px] leading-relaxed text-(--color-ink-soft)">
			Rofiant Code is a local-first CLI. This page explains what data stays on your machine, what
			reaches a model provider, and what this website collects. Last updated August 30, 2026.
		</p>
	</header>

	<article class="mt-14 flex max-w-2xl flex-col gap-12">
		<section>
			<h2 class="font-(family-name:--font-display) text-[1.6rem] text-(--color-ink)">
				What stays on your machine
			</h2>
			<p class="mt-3 text-[15px] leading-relaxed text-(--color-ink-soft)">
				Rofiant Code stores sessions, settings, and authentication locally in <code
					class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[13px]"
					>$XDG_DATA_HOME/rofiant</code
				>
				(or the platform equivalent) as
				<code
					class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[13px]"
					>sessions.db</code
				>,
				<code
					class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[13px]"
					>settings.json</code
				>, and
				<code
					class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[13px]"
					>auth.json</code
				>. The app itself doesn't upload any of it anywhere.
				<code
					class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[13px]"
					>auth.json</code
				> gets mode 0600 on POSIX systems.
			</p>
		</section>

		<section>
			<h2 class="font-(family-name:--font-display) text-[1.6rem] text-(--color-ink)">
				What reaches your model provider
			</h2>
			<p class="mt-3 text-[15px] leading-relaxed text-(--color-ink-soft)">
				Rofiant Code sends conversation messages, including resumed history, attached file contents,
				and tool output, to whichever endpoint <code
					class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[13px]"
					>AI_BASE_URL</code
				> configures. With a third-party key (BYOK), it sends that key as a Bearer credential directly
				to that endpoint with each request. Rofiant does not see this traffic.
			</p>
		</section>

		<section>
			<h2 class="font-(family-name:--font-display) text-[1.6rem] text-(--color-ink)">
				Signing in with Rofiant instead
			</h2>
			<p class="mt-3 text-[15px] leading-relaxed text-(--color-ink-soft)">
				Running <code
					class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[13px]"
					>/login</code
				>
				and choosing the Rofiant option routes model requests through a relay Rofiant operates, using
				Rofiant's own provider credential instead of one you supply. Your conversation content still reaches
				the underlying model provider, but it passes through Rofiant's server first. Sign-in itself uses
				Supabase auth (email or OAuth); Rofiant Code stores only your session token, locally, in
				<code
					class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[13px]"
					>auth.json</code
				>.
			</p>
		</section>

		<section>
			<h2 class="font-(family-name:--font-display) text-[1.6rem] text-(--color-ink)">
				Local tool access
			</h2>
			<p class="mt-3 text-[15px] leading-relaxed text-(--color-ink-soft)">
				File tools and shell commands run on your machine and can read local data. Their output
				becomes part of the conversation, so Rofiant Code sends it to the provider under the rules
				above. Shell commands the agent runs (or that you approve) can also transmit data on their
				own, independent of the app, for example a <code
					class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[13px]"
					>curl</code
				>
				or
				<code
					class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[13px]"
					>git push</code
				>.
			</p>
		</section>

		<section>
			<h2 class="font-(family-name:--font-display) text-[1.6rem] text-(--color-ink)">
				This website
			</h2>
			<p class="mt-3 text-[15px] leading-relaxed text-(--color-ink-soft)">
				code.rofiant.ca does not run analytics or tracking cookies. It serves static pages and links
				to the install scripts and source on GitHub.
			</p>
		</section>

		<section>
			<h2 class="font-(family-name:--font-display) text-[1.6rem] text-(--color-ink)">
				Reporting a concern
			</h2>
			<p class="mt-3 text-[15px] leading-relaxed text-(--color-ink-soft)">
				Report a security issue privately through the <a
					href="https://github.com/RofiantAI/Rofiant-Code/security"
					target="_blank"
					rel="noreferrer"
					class="underline decoration-(--color-border-hover) underline-offset-2 hover:text-(--color-ink)"
					>GitHub Security tab</a
				> rather than a public issue.
			</p>
		</section>
	</article>
</main>

<Footer />
