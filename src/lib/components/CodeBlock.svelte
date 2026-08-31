<script lang="ts">
	let { code }: { code: string } = $props();
</script>

<pre
	class="overflow-x-auto rounded-xl border border-(--color-border) bg-(--color-surface) px-4 py-3 font-(family-name:--font-mono) text-[13px] leading-relaxed text-(--color-ink-soft)"><code
		>{code}</code
	></pre>
