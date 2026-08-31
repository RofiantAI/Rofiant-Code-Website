<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProductMockup from '$lib/components/ProductMockup.svelte';
	import Transcript from '$lib/components/Transcript.svelte';
	import FeatureSection from '$lib/components/FeatureSection.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { reveal } from '$lib/utils/reveal';
</script>

<Seo
	title="Rofiant Code — Terminal Coding Agent"
	description="Rofiant Code is a terminal-native coding agent that reads your codebase, edits files, runs commands, and completes real development tasks."
	path="/"
/>

<Navbar />

<main>
	<Hero />

	<section id="features" class="shell pb-8 text-center">
		<SectionHeading center title="Why choose Rofiant Code" />
	</section>

	<div class="flex flex-col gap-6 pb-24 md:gap-8">
		<FeatureSection
			wash="sage"
			title="Powerful models, ready out of the box"
			description="No setup ceremony. Plug in any OpenAI-compatible endpoint and start working, or use a free open model through OpenRouter from the first run."
		>
			{#snippet visual()}
				<div use:reveal class="mt-16 w-full max-w-5xl">
					<img
						src="/preview1.png"
						alt="Rofiant Code running in a terminal, showing the build-mode prompt"
						width="1896"
						height="1030"
						class="w-full rounded-2xl border border-(--color-border) shadow-[0_40px_90px_rgba(28,27,25,0.18)] dark:shadow-[0_40px_90px_rgba(0,0,0,0.5)]"
					/>
				</div>
			{/snippet}
		</FeatureSection>

		<FeatureSection
			reverse
			wash="stone"
			title="One-shot subagents for focused work"
			description="Prefix a message with $explore or $general to send it as a focused side-quest instead of derailing the main conversation."
		>
			{#snippet visual()}
				<ProductMockup title="src/game/scene.ts">
					<Transcript
						lines={[
							{ type: 'agent', text: 'Reading src/game/scene.ts' },
							{ type: 'agent', text: 'Reading src/game/loader.ts' },
							{ type: 'check', text: 'Found duplicate event listeners on start()' },
							{ type: 'cmd', text: '$explore trace player camera init' }
						]}
					/>
				</ProductMockup>
			{/snippet}
		</FeatureSection>
	</div>

	<div use:reveal class="shell pb-24">
		<div class="wash-card rounded-[28px] p-6 md:rounded-[32px] md:p-12 lg:p-16 bg-(--wash-mist)">
			<div class="mx-auto max-w-2xl text-center">
				<h3
					class="font-(family-name:--font-display) text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.15] text-(--color-ink)"
				>
					Unlimited context
				</h3>
				<p class="mt-4 text-[15px] leading-relaxed text-(--color-ink-soft)">
					Sessions persist locally. The agent compacts old tool output as conversations grow, so
					nothing important gets pushed out, even hundreds of turns in.
				</p>
			</div>
			<div class="relative mx-auto mt-10 max-w-2xl">
				<ProductMockup title="src/routes/+page.svelte">
					<pre
						class="overflow-x-auto font-(family-name:--font-mono) text-[11.5px] leading-relaxed text-(--color-ink-soft)"><span
							class="block px-2 -mx-2 rounded bg-red-500/10 text-red-700/80 dark:text-red-400/80"
							>-  const items = data.filter(i =&gt; i.active)</span
						>
<span
							class="block px-2 -mx-2 rounded bg-emerald-500/10 text-emerald-700/80 dark:text-emerald-400/80"
							>+  const items = data.filter(isActive)</span
						>
<span
							class="block px-2 -mx-2 rounded bg-emerald-500/10 text-emerald-700/80 dark:text-emerald-400/80"
							>+  const isActive = (i: Item) =&gt; i.active &amp;&amp; !i.archived</span
						>
   export let data: Item[]
   let sort: 'asc' | 'desc' = 'asc'</pre>
				</ProductMockup>
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-6 pb-24 md:gap-8">
		<FeatureSection
			wash="peach"
			title="A system that learns your workflow"
			description="Skills and an AGENTS.md file teach the agent your project's own commands and conventions, so it fits the way you already work."
		>
			{#snippet visual()}
				<ProductMockup title="Sessions">
					<div class="flex flex-col gap-1 font-(family-name:--font-mono) text-[11.5px]">
						<p class="mb-1 text-[11px] text-(--color-muted)">Tue Jun 09 2026</p>
						<div class="flex items-center justify-between rounded-md bg-(--color-bg) px-2.5 py-2">
							<span class="text-(--color-ink)">10:41 · Auto Build</span>
							<span class="text-(--color-muted)">7:06 PM</span>
						</div>
						<div class="flex items-center justify-between px-2.5 py-2">
							<span class="text-(--color-ink-soft)">10:12 · Auto Drift</span>
							<span class="text-(--color-muted)">7:02 PM</span>
						</div>
						<div class="flex items-center justify-between px-2.5 py-2">
							<span class="text-(--color-ink-soft)">09:58 · Fix retry logic</span>
							<span class="text-(--color-muted)">6:47 PM</span>
						</div>
					</div>
				</ProductMockup>
			{/snippet}
		</FeatureSection>
	</div>
</main>

<Footer />
