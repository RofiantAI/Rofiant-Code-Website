<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children }: { title?: string; children: Snippet } = $props();
</script>

<div
	class="overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) shadow-[0_24px_60px_rgba(28,27,25,0.14)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
>
	{#if title}
		<div class="flex h-9 shrink-0 items-center border-b border-(--color-border) px-4">
			<span class="font-(family-name:--font-mono) text-[11.5px] text-(--color-muted)">{title}</span>
		</div>
	{/if}
	<div class="min-w-0 p-4 sm:p-5">
		{@render children()}
	</div>
</div>
