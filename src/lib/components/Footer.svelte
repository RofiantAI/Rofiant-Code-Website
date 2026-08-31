<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="bg-(--color-bg) pt-24 pb-10 md:pt-32">
	<p class="shell text-center text-[12.5px] text-(--color-muted)">
		Copyright © {year} Rofiant. All Rights Reserved
		<span class="mx-2 text-(--color-border-hover)">|</span>
		<a
			href="/privacy"
			class="underline decoration-(--color-border-hover) underline-offset-2 hover:text-(--color-ink-soft)"
			>Privacy Policy</a
		>
		<span class="mx-2 text-(--color-border-hover)">|</span>
		<a
			href="/terms"
			class="underline decoration-(--color-border-hover) underline-offset-2 hover:text-(--color-ink-soft)"
			>Terms</a
		>
	</p>
</footer>
