<script lang="ts">
	type Platform = 'unix' | 'windows';

	let { value = $bindable('unix') }: { value?: Platform } = $props();

	const options: { id: Platform; label: string }[] = [
		{ id: 'unix', label: 'Linux / macOS' },
		{ id: 'windows', label: 'Windows' }
	];
</script>

<div
	role="tablist"
	aria-label="Platform"
	class="inline-flex rounded-full border border-(--color-border) bg-(--color-bg) p-1"
>
	{#each options as option (option.id)}
		<button
			type="button"
			role="tab"
			aria-selected={value === option.id}
			tabindex={value === option.id ? 0 : -1}
			class="relative rounded-full px-5 py-2 text-[13.5px] font-medium transition-all duration-200 {value ===
			option.id
				? 'bg-(--color-surface) text-(--color-ink) shadow-[0_1px_2px_rgba(28,27,25,0.08)]'
				: 'text-(--color-muted) hover:text-(--color-ink-soft)'}"
			onclick={() => (value = option.id)}
		>
			{option.label}
		</button>
	{/each}
</div>
