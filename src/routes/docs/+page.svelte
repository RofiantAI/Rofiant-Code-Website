<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import Seo from '$lib/components/Seo.svelte';

	const toc = [
		{ id: 'quick-start', label: 'Quick start' },
		{ id: 'modes', label: 'Build & plan modes' },
		{ id: 'commands', label: 'Commands' },
		{ id: 'configuration', label: 'Configuration' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'subagents', label: 'Subagents' }
	];

	const commands = [
		['/help', 'Show commands and shortcuts'],
		['/new', 'Start a new session'],
		['/model [id]', 'View or change the model'],
		['/login', 'Open the provider sign-in and API-key selector'],
		['/compact', 'Summarize and replace earlier history'],
		['/status', 'Show project, Git, provider, and model information'],
		['/diff', 'Show Git changes'],
		['/sessions', 'List recent project sessions'],
		['/usage', 'Show token usage'],
		['/skip-permissions', 'Toggle permission bypass after confirmation'],
		['/exit', 'Exit Rofiant Code']
	];

	const envVars = [
		['AI_API_KEY', '-', 'Provider API key'],
		['AI_BASE_URL', 'https://openrouter.ai/api/v1', 'OpenAI-compatible API base URL'],
		['AI_MODEL', 'nvidia/nemotron-3-super-120b-a12b:free', 'Model ID'],
		['AI_MAX_CONTEXT_TOKENS', '100000', 'Context trimming budget'],
		['ROFIANT_WEB_URL', 'https://www.rofiant.ca', 'Rofiant login URL'],
		['ROFIANT_DANGEROUSLY_SKIP_PERMISSIONS', '-', 'Set to 1 to bypass permission prompts']
	];
</script>

<Seo
	title="Documentation — Rofiant Code"
	description="Install, configure, and use Rofiant Code, the terminal-native coding agent."
	path="/docs"
/>

<Navbar />

<main class="shell py-16 md:py-20">
	<header class="max-w-2xl">
		<h1
			class="font-(family-name:--font-display) text-[clamp(2rem,4vw,2.75rem)] leading-[1.1] text-(--color-ink)"
		>
			Documentation
		</h1>
		<p class="mt-3 text-[15px] leading-relaxed text-(--color-ink-soft)">
			Everything you need to install, configure, and run Rofiant Code from your terminal.
		</p>
	</header>

	<div class="mt-14 grid gap-12 md:grid-cols-[180px_1fr] md:gap-16">
		<nav class="hidden md:block">
			<ul class="sticky top-8 flex flex-col gap-1 text-[13.5px]">
				{#each toc as item (item.id)}
					<li>
						<a
							href="#{item.id}"
							class="block rounded-md px-2 py-1.5 text-(--color-ink-soft) transition-colors hover:bg-(--color-surface) hover:text-(--color-ink)"
							>{item.label}</a
						>
					</li>
				{/each}
			</ul>
		</nav>

		<article class="flex max-w-2xl flex-col gap-16">
			<section id="quick-start" class="scroll-mt-8">
				<h2 class="font-(family-name:--font-display) text-[1.6rem] text-(--color-ink)">
					Quick start
				</h2>
				<p class="mt-3 text-[15px] leading-relaxed text-(--color-ink-soft)">
					Install with one command, then run <code
						class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[13px]"
						>rofiant</code
					> from the project you want to work on.
				</p>
				<p class="mt-6 text-[13px] font-medium text-(--color-muted)">macOS / Linux</p>
				<div class="mt-2">
					<CodeBlock
						code="curl -fsSL https://raw.githubusercontent.com/RofiantAI/Rofiant-Code/main/install.sh | bash"
					/>
				</div>
				<p class="mt-4 text-[13px] font-medium text-(--color-muted)">Windows (PowerShell)</p>
				<div class="mt-2">
					<CodeBlock
						code="irm https://raw.githubusercontent.com/RofiantAI/Rofiant-Code/main/install.ps1 | iex"
					/>
				</div>
				<p class="mt-6 text-[15px] leading-relaxed text-(--color-ink-soft)">
					Rofiant Code needs an OpenAI-compatible model endpoint. Set one before launch:
				</p>
				<div class="mt-2">
					<CodeBlock
						code={`export AI_API_KEY="your-key"
export AI_BASE_URL="https://openrouter.ai/api/v1"
export AI_MODEL="nvidia/nemotron-3-super-120b-a12b:free"
rofiant`}
					/>
				</div>
				<p class="mt-4 text-[15px] leading-relaxed text-(--color-ink-soft)">
					Or run <code
						class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[13px]"
						>/login</code
					> inside the app to save a key locally instead.
				</p>
			</section>

			<section id="modes" class="scroll-mt-8">
				<h2 class="font-(family-name:--font-display) text-[1.6rem] text-(--color-ink)">
					Build & plan modes
				</h2>
				<p class="mt-3 text-[15px] leading-relaxed text-(--color-ink-soft)">
					Press <code
						class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[13px]"
						>Tab</code
					> to switch between the two operating modes.
				</p>
				<div class="mt-4 overflow-hidden rounded-xl border border-(--color-border)">
					<div
						class="grid grid-cols-[100px_1fr] border-b border-(--color-border) bg-(--color-surface) px-4 py-2.5 text-[12.5px] font-medium text-(--color-muted)"
					>
						<span>Mode</span><span>Description</span>
					</div>
					<div
						class="grid grid-cols-[100px_1fr] border-b border-(--color-border) px-4 py-3 text-[14px]"
					>
						<span class="font-medium text-(--color-ink)">Build</span>
						<span class="text-(--color-ink-soft)"
							>Full coding mode with permission prompts based on each tool's risk classification.</span
						>
					</div>
					<div class="grid grid-cols-[100px_1fr] px-4 py-3 text-[14px]">
						<span class="font-medium text-(--color-ink)">Plan</span>
						<span class="text-(--color-ink-soft)"
							>Read-only exploration using file search, file reads, Git diff, and task tracking.</span
						>
					</div>
				</div>
			</section>

			<section id="commands" class="scroll-mt-8">
				<h2 class="font-(family-name:--font-display) text-[1.6rem] text-(--color-ink)">Commands</h2>
				<div class="mt-4 flex flex-col overflow-hidden rounded-xl border border-(--color-border)">
					{#each commands as [cmd, desc], i (cmd)}
						<div
							class="grid grid-cols-[140px_1fr] px-4 py-2.5 text-[13.5px] {i !== commands.length - 1
								? 'border-b border-(--color-border)'
								: ''}"
						>
							<code class="font-(family-name:--font-mono) text-(--color-ink)">{cmd}</code>
							<span class="text-(--color-ink-soft)">{desc}</span>
						</div>
					{/each}
				</div>
			</section>

			<section id="configuration" class="scroll-mt-8">
				<h2 class="font-(family-name:--font-display) text-[1.6rem] text-(--color-ink)">
					Configuration
				</h2>
				<p class="mt-3 text-[15px] leading-relaxed text-(--color-ink-soft)">
					Rofiant Code reads its configuration from environment variables.
				</p>
				<div class="mt-4 flex flex-col overflow-hidden rounded-xl border border-(--color-border)">
					{#each envVars as [name, def, desc], i (name)}
						<div
							class="grid grid-cols-1 gap-1 px-4 py-3 text-[13.5px] sm:grid-cols-[200px_1fr_1fr] sm:gap-4 {i !==
							envVars.length - 1
								? 'border-b border-(--color-border)'
								: ''}"
						>
							<code class="font-(family-name:--font-mono) text-(--color-ink)">{name}</code>
							<span class="font-(family-name:--font-mono) text-(--color-muted) break-all"
								>{def}</span
							>
							<span class="text-(--color-ink-soft)">{desc}</span>
						</div>
					{/each}
				</div>
			</section>

			<section id="skills" class="scroll-mt-8">
				<h2 class="font-(family-name:--font-display) text-[1.6rem] text-(--color-ink)">Skills</h2>
				<p class="mt-3 text-[15px] leading-relaxed text-(--color-ink-soft)">
					Rofiant Code discovers <code
						class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[13px]"
						>SKILL.md</code
					>
					files from project directories (<code
						class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[13px]"
						>.rofiant/skills/</code
					>,
					<code
						class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[13px]"
						>.claude/skills/</code
					>, and similar) and user-level config directories. Invoke a discovered skill with
					<code
						class="rounded bg-(--color-surface) px-1.5 py-0.5 font-(family-name:--font-mono) text-[13px]"
						>/&lt;skill-name&gt; [request]</code
					>.
				</p>
			</section>

			<section id="subagents" class="scroll-mt-8">
				<h2 class="font-(family-name:--font-display) text-[1.6rem] text-(--color-ink)">
					Subagents
				</h2>
				<p class="mt-3 text-[15px] leading-relaxed text-(--color-ink-soft)">
					Send a task to a focused one-shot subagent by starting the message with its name.
				</p>
				<div class="mt-4 flex flex-col overflow-hidden rounded-xl border border-(--color-border)">
					<div
						class="grid grid-cols-[110px_1fr] border-b border-(--color-border) px-4 py-3 text-[13.5px]"
					>
						<code class="font-(family-name:--font-mono) text-(--color-ink)">$explore</code>
						<span class="text-(--color-ink-soft)">Read-only repository investigation</span>
					</div>
					<div class="grid grid-cols-[110px_1fr] px-4 py-3 text-[13.5px]">
						<code class="font-(family-name:--font-mono) text-(--color-ink)">$general</code>
						<span class="text-(--color-ink-soft)">Full-capability coding task</span>
					</div>
				</div>
				<div class="mt-4">
					<CodeBlock code="$explore find where authentication state is stored" />
				</div>
			</section>
		</article>
	</div>
</main>

<Footer />
