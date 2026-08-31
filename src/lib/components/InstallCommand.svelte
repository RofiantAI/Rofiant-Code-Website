<script lang="ts">
	import { Check, Copy, Terminal } from 'lucide-svelte';

	let { platform = 'unix' }: { platform?: 'unix' | 'windows' } = $props();

	const commands = {
		unix: 'curl -fsSL https://raw.githubusercontent.com/RofiantAI/Rofiant-Code/main/install.sh | bash',
		windows: 'irm https://raw.githubusercontent.com/RofiantAI/Rofiant-Code/main/install.ps1 | iex'
	} as const;

	let copied = $state(false);
	let timeout: ReturnType<typeof setTimeout>;

	async function copy() {
		await navigator.clipboard.writeText(commands[platform]);
		copied = true;
		clearTimeout(timeout);
		timeout = setTimeout(() => (copied = false), 1800);
	}
</script>

<div
	class="flex min-h-12 w-full items-center gap-3 rounded-xl border border-(--color-border) bg-(--color-surface) py-2 pr-2 pl-5 transition-colors hover:border-(--color-border-hover)"
>
	<Terminal size={15} class="shrink-0 text-(--color-muted)" aria-hidden="true" />
	<code
		class="min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-(family-name:--font-mono) text-[12px] leading-5 text-(--color-ink-soft)"
	>
		{commands[platform]}
	</code>
	<button
		type="button"
		onclick={copy}
		class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-(--color-muted) transition-colors hover:bg-(--color-bg) hover:text-(--color-ink) active:scale-90"
		aria-label="Copy install command"
	>
		{#if copied}
			<Check size={15} />
		{:else}
			<Copy size={15} />
		{/if}
	</button>
</div>
