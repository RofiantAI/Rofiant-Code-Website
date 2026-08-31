<script lang="ts">
	import type { Snippet } from 'svelte';
	import { reveal } from '$lib/utils/reveal';

	let {
		title,
		description,
		reverse = false,
		wash = 'stone',
		visual
	}: {
		title: string;
		description: string;
		reverse?: boolean;
		wash?: 'sage' | 'stone' | 'mist' | 'peach' | 'blush';
		visual: Snippet;
	} = $props();

	// Literal classes so Tailwind's scanner can see each one and keep its --wash-* var.
	const washClasses = {
		sage: 'bg-(--wash-sage)',
		stone: 'bg-(--wash-stone)',
		mist: 'bg-(--wash-mist)',
		peach: 'bg-(--wash-peach)',
		blush: 'bg-(--wash-blush)'
	} as const;
</script>

<div use:reveal class="shell">
	<div class="wash-card rounded-[28px] p-6 md:rounded-[32px] md:p-12 lg:p-16 {washClasses[wash]}">
		<div class="relative grid items-center gap-10 md:grid-cols-2 md:gap-14">
			<div class={reverse ? 'md:order-2' : ''}>
				{@render visual()}
			</div>
			<div class="{reverse ? 'md:order-1' : ''} max-w-md">
				<h3
					class="font-(family-name:--font-display) text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.15] text-(--color-ink)"
				>
					{title}
				</h3>
				<p class="mt-4 text-[15px] leading-relaxed text-(--color-ink-soft)">
					{description}
				</p>
			</div>
		</div>
	</div>
</div>
