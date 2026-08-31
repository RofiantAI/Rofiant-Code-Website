<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PlatformSelector from '$lib/components/PlatformSelector.svelte';
	import InstallCommand from '$lib/components/InstallCommand.svelte';
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import ProductMockup from '$lib/components/ProductMockup.svelte';
	import Transcript from '$lib/components/Transcript.svelte';
	import GithubMark from '$lib/components/icons/GithubMark.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { BookOpen } from 'lucide-svelte';
	import { reveal } from '$lib/utils/reveal';

	let platform = $state<'unix' | 'windows'>('unix');
	const signInCommand = 'rofiant\n/login';
</script>

<Seo
	title="Install Rofiant Code"
	description="Install the Rofiant Code terminal coding agent on macOS, Linux, or Windows, then connect any OpenAI-compatible model."
	path="/install"
/>

<Navbar />

<main>
	<section class="shell flex flex-col items-center pt-16 pb-16 text-center md:pt-20">
		<h1
			class="font-(family-name:--font-display) text-[clamp(2rem,4vw,2.75rem)] leading-[1.1] text-(--color-ink)"
		>
			Install Rofiant Code
		</h1>
		<p class="mt-3 max-w-lg text-[15px] leading-relaxed text-(--color-ink-soft)">
			One command installs the CLI. Plug in any OpenAI-compatible endpoint and start working, no
			setup ceremony.
		</p>

		<div class="mt-8">
			<PlatformSelector bind:value={platform} />
		</div>

		<div class="mt-4 w-full max-w-3xl">
			<InstallCommand {platform} />
		</div>
	</section>

	<div class="shell pb-24">
		<div class="grid gap-6 md:grid-cols-2 md:gap-8">
			<div
				use:reveal
				class="wash-card rounded-[28px] p-6 md:rounded-[32px] md:p-8 bg-(--wash-sage)"
			>
				<h2 class="font-(family-name:--font-display) text-[1.35rem] text-(--color-ink)">
					Bring your own key
				</h2>
				<p class="mt-3 text-[14.5px] leading-relaxed text-(--color-ink-soft)">
					Set <code
						class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[12.5px]"
						>AI_API_KEY</code
					>,
					<code
						class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[12.5px]"
						>AI_BASE_URL</code
					>, and
					<code
						class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[12.5px]"
						>AI_MODEL</code
					> for any OpenAI-compatible provider.
				</p>
				<div class="mt-4">
					<CodeBlock
						code={`export AI_API_KEY="your-key"
export AI_BASE_URL="https://openrouter.ai/api/v1"
export AI_MODEL="nvidia/nemotron-3-super-120b-a12b:free"
rofiant`}
					/>
				</div>
			</div>

			<div
				use:reveal
				class="wash-card rounded-[28px] p-6 md:rounded-[32px] md:p-8 bg-(--wash-blush)"
			>
				<h2 class="font-(family-name:--font-display) text-[1.35rem] text-(--color-ink)">
					Sign in with Rofiant
				</h2>
				<p class="mt-3 text-[14.5px] leading-relaxed text-(--color-ink-soft)">
					No key to manage. Authenticate through Rofiant's relay and save a session token locally
					instead.
				</p>
				<div class="mt-4">
					<CodeBlock code={signInCommand} />
				</div>
			</div>
		</div>
	</div>

	<div use:reveal class="shell pb-24">
		<div class="mx-auto max-w-2xl text-center">
			<h2
				class="font-(family-name:--font-display) text-[clamp(1.5rem,2.4vw,2rem)] text-(--color-ink)"
			>
				What you'll see
			</h2>
			<p class="mt-4 text-[15px] leading-relaxed text-(--color-ink-soft)">
				Press Tab to switch between Build and Plan mode once the agent is running.
			</p>
		</div>
		<div class="relative mx-auto mt-10 max-w-2xl">
			<ProductMockup title="Terminal">
				<Transcript
					lines={[
						{ type: 'cmd', text: 'rofiant' },
						{ type: 'agent', text: 'Ready. Press Tab to switch between Build and Plan.' },
						{ type: 'user', text: 'Add a health check endpoint to the API' },
						{ type: 'agent', text: 'Reading src/server/routes.ts' },
						{ type: 'check', text: 'Added GET /health returning 200' }
					]}
				/>
			</ProductMockup>
		</div>
	</div>

	<div use:reveal class="shell pb-24">
		<div
			class="wash-card flex flex-col items-center gap-5 rounded-[28px] p-10 text-center md:rounded-[32px] md:p-14 bg-(--wash-stone)"
		>
			<h2
				class="font-(family-name:--font-display) text-[clamp(1.4rem,2vw,1.75rem)] text-(--color-ink)"
			>
				Need more detail?
			</h2>
			<div class="flex items-center gap-3">
				<a
					href="https://github.com/RofiantAI/Rofiant-Code"
					target="_blank"
					rel="noreferrer"
					class="flex items-center gap-1.5 rounded-full border border-(--color-border) bg-(--color-bg) px-4 py-2 text-[13.5px] font-medium text-(--color-ink-soft) transition-colors hover:border-(--color-border-hover) hover:text-(--color-ink)"
				>
					<GithubMark size={13} /> GitHub
				</a>
				<a
					href="/docs"
					class="flex items-center gap-1.5 rounded-full bg-(--color-ink) px-4 py-2 text-[13.5px] font-medium text-(--color-bg) transition-opacity hover:opacity-85"
				>
					<BookOpen size={13} /> Docs
				</a>
			</div>
		</div>
	</div>
</main>

<Footer />
