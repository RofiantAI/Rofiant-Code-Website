<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import logoText from '$lib/assets/logo-text.png';

	let open = $state(false);
	let productOpen = $state(false);
</script>

<header class="relative z-50 bg-(--color-bg)">
	<div class="shell flex h-16 items-center justify-between">
		<a href="/" class="flex items-center">
			<img src={logoText} alt="Rofiant Code" height="32" class="h-15 w-auto dark:invert" />
		</a>

		<nav class="hidden items-center gap-8 md:flex">
			<div class="relative">
				<button
					type="button"
					class="flex items-center gap-1 text-[14px] text-(--color-ink-soft) transition-colors hover:text-(--color-ink)"
					aria-expanded={productOpen}
					onclick={() => (productOpen = !productOpen)}
				>
					Product
					<ChevronDown size={14} />
				</button>
				{#if productOpen}
					<div
						class="absolute top-full left-1/2 mt-3 w-44 -translate-x-1/2 rounded-xl border border-(--color-border) bg-(--color-surface) p-1.5 shadow-[0_12px_24px_rgba(28,27,25,0.08)]"
					>
						<a
							href="/#features"
							class="block rounded-lg px-3 py-2 text-[13.5px] text-(--color-ink-soft) hover:bg-(--color-bg) hover:text-(--color-ink)"
							>Features</a
						>
						<a
							href="https://github.com/RofiantAI/Rofiant-Code"
							target="_blank"
							rel="noreferrer"
							class="block rounded-lg px-3 py-2 text-[13.5px] text-(--color-ink-soft) hover:bg-(--color-bg) hover:text-(--color-ink)"
							>GitHub</a
						>
					</div>
				{/if}
			</div>
			<a
				href="/docs"
				class="text-[14px] text-(--color-ink-soft) transition-colors hover:text-(--color-ink)"
				>Docs</a
			>
			<a
				href="/install"
				class="text-[14px] font-medium text-(--color-ink) transition-opacity hover:opacity-70"
				>Get started</a
			>
		</nav>

		<button
			type="button"
			class="flex h-8 w-8 items-center justify-center rounded-md text-(--color-ink-soft) md:hidden"
			aria-label={open ? 'Close menu' : 'Open menu'}
			aria-expanded={open}
			onclick={() => (open = !open)}
		>
			<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
				{#if open}
					<path
						d="M4 4L14 14M14 4L4 14"
						stroke="currentColor"
						stroke-width="1.4"
						stroke-linecap="round"
					/>
				{:else}
					<path
						d="M2 5H16M2 9H16M2 13H16"
						stroke="currentColor"
						stroke-width="1.4"
						stroke-linecap="round"
					/>
				{/if}
			</svg>
		</button>
	</div>

	{#if open}
		<nav class="flex flex-col gap-1 border-t border-(--color-border) px-5 py-3 md:hidden">
			<a href="/#features" class="rounded-lg px-2 py-2.5 text-sm text-(--color-ink-soft)"
				>Features</a
			>
			<a href="/docs" class="rounded-lg px-2 py-2.5 text-sm text-(--color-ink-soft)">Docs</a>
			<a href="/install" class="rounded-lg px-2 py-2.5 text-sm text-(--color-ink-soft)"
				>Get started</a
			>
			<a
				href="https://github.com/RofiantAI/Rofiant-Code"
				target="_blank"
				rel="noreferrer"
				class="rounded-lg px-2 py-2.5 text-sm text-(--color-ink-soft)">GitHub</a
			>
		</nav>
	{/if}
</header>
