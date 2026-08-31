<script lang="ts">
	import { Check } from 'lucide-svelte';

	type Line = { type: 'user' | 'agent' | 'check' | 'cmd' | 'out'; text: string };

	let { lines }: { lines: Line[] } = $props();
</script>

<div class="flex flex-col gap-2 font-(family-name:--font-mono) text-[12.5px] leading-relaxed">
	{#each lines as line, i (i)}
		{#if line.type === 'user'}
			<p class="font-sans font-medium text-(--color-ink)">{line.text}</p>
		{:else if line.type === 'agent'}
			<p class="text-(--color-muted)">{line.text}</p>
		{:else if line.type === 'check'}
			<p class="flex items-center gap-1.5 text-(--color-ink-soft)">
				<Check size={12} class="shrink-0 text-(--color-accent)" />
				{line.text}
			</p>
		{:else if line.type === 'cmd'}
			<p class="text-(--color-ink)">
				<span class="text-(--color-muted)">$</span>
				{line.text}
			</p>
		{:else}
			<p class="pl-3 text-(--color-muted)">{line.text}</p>
		{/if}
	{/each}
</div>
