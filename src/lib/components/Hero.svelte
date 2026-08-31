<script lang="ts">
	import PlatformSelector from './PlatformSelector.svelte';
	import InstallCommand from './InstallCommand.svelte';
	import GithubMark from './icons/GithubMark.svelte';
	import { BookOpen } from 'lucide-svelte';

	let platform = $state<'unix' | 'windows'>('unix');
</script>

<section class="shell flex flex-col items-center pt-20 pb-16 text-center md:pt-24">
	<h1
		class="font-(family-name:--font-display) text-[clamp(2.75rem,6vw,4.25rem)] leading-[1.05] text-(--color-ink)"
	>
		Rofiant Code
	</h1>

	<p class="mt-5 max-w-lg text-[clamp(1rem,1.3vw,1.1rem)] leading-relaxed text-(--color-ink-soft)">
		A terminal-native coding agent for developers, built to read, edit, and ship real projects with
		you.
	</p>

	<div class="mt-9" id="install">
		<PlatformSelector bind:value={platform} />
	</div>

	<div class="mt-4 w-full max-w-3xl">
		<InstallCommand {platform} />
	</div>

	<div class="mt-6 flex items-center gap-3">
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
</section>
