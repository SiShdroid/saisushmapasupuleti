<script lang="ts">
	import AzureAiStudio from '$lib/icons/azure-ai-studio.svelte';
	import AzureDevops from '$lib/icons/azure-devops.svelte';
	import AzureFunctions from '$lib/icons/azure-functions.svelte';
	import AzureSql from '$lib/icons/azure-sql.svelte';
	import Azure from '$lib/icons/azure.svelte';
	import Cosmos from '$lib/icons/cosmos.svelte';
	import DotNet from '$lib/icons/dot-net.svelte';
	import OpenAi from '$lib/icons/open-ai.svelte';
	import Milestone from '$lib/milestone.svelte';
	import Javascript from '$lib/icons/javascript.svelte';
	import Typescript from '$lib/icons/typescript.svelte';
	import React from '$lib/icons/react.svelte';
	import Docker from '$lib/icons/docker.svelte';
	import Redis from '$lib/icons/redis.svelte';
	import Angular from '$lib/icons/angular.svelte';
	import SqlServer from '$lib/icons/sql-server.svelte';
	import Powershell from '$lib/icons/powershell.svelte';
	import Jquery from '$lib/icons/jquery.svelte';
	import C from '$lib/icons/c.svelte';
	import MicrosoftOffice from '$lib/icons/microsoft-office.svelte';
	import Aspen from '$lib/icons/aspen.svelte';
	import Matlab from '$lib/icons/matlab.svelte';
	import Polymath from '$lib/icons/polymath.svelte';
	import Wonderware from '$lib/icons/wonderware.svelte';
	import Comsol from '$lib/icons/comsol.svelte';
	import Emerson from '$lib/icons/emerson.svelte';
	import Vmg from '$lib/icons/vmg.svelte';
	import Seeq from '$lib/icons/seeq.svelte';
    import Svelte from '$lib/icons/svelte.svelte';
    import Aws from '$lib/icons/aws.svelte';
	import { onMount } from 'svelte';
	import { activateOnScroll } from '$lib/util';

	const work = [
    {
        from: 'Nov 2024',
        to: 'Present',
        title: 'Graduate Research Assistant',
        workPlace: 'University of Houston',
        body: [
            'Working on the design and control of a underwater power supply for maintaining acoustic sensor signalling in deep ocean',
            'Worked on PCB design using Altium, hardware testing & validation and verification of the prototype.'
        ],
        keywords: [
            'Hardware Engineer',
            'Electrical Engineering',
            'Power Electronics',
            'NSF',
            'Team Collaboration'
        ],
        icons: [Svelte,Docker,Javascript,Powershell,Aws]
    },
    {
        from: 'August 2023',
        to: 'November 2024',
        title: 'Graduate Research Assistant',
        workPlace: 'University of Houston',
        body: [
            'Designed 6-layer PCB using Altium PCB Designer for +175C application',
            'Collaborated with a team on the schemaic and layout design',
            'Simulated a closed loop control of High-Voltage Boost Converter using PSIM'
        ],
        keywords: [
            'High Voltage',
            'Altium PCB Design',
            'PSIM Simulation',
            '6-layer PCB development',
            'Team collaboration'
        ],
        icons: [MicrosoftOffice,C,OpenAi,Javascript,Svelte,Aws]
    },
    {
        from: 'August 2022',
        to: 'May 2023',
        title: 'Graduate Research Assistant',
        workPlace: 'Clemson UNiversity',
        body: [
            'Analyzed operation and thermal management of Wind turbine based PMSG in Ansys motorCAD',
            'Simulated permanent magnet synchronous generator (PMSG) with speed as input in MATLAB Simulink with theoretical equations and validation.'
            
        ],
        keywords: [
            'Ansys',
            'Permanent Magnet Synchronous Generator',
            'Simulation',
            'VIPR-GS',
        ],
        icons: []
    },
    {
        from: 'August 2019',
        to: 'July 2022',
        title: 'Graduate Research Assistant',
        workPlace: 'Indian Institute of Technology, Mandi',
        body: [
            'Created a complete validation test setup from scratch of a BLDC motor model with battery-supercapacitor (SC) hybrid energy storage system (HESS) and inductive wireless power transfer.',
            'Designed digital control of bidirectional buck-boost converter using real-time platform such as dSPACE.',
            'Developed and validated a 600W Bi-directional Wireless Power Transfer system for Electric Vehicles (EVs) and tested for European drivetrain as a real-life drive scenario.'
        ],
        keywords: [
            'Wireless power transfer',
            'Electric Vehicles',
            'hybrid energy storage system',
            'BLDC motor model',
            'dSPACE',
			'DSP microcontroller'
        ],
        icons: []
    }
];



	onMount(() => {
		activateOnScroll('.milestone');
	});
</script>

<div
	class="left-0 -mt-2 w-full overflow-hidden border-t-8 border-slate-700 bg-slate-800 pb- pt-24 md:py-24"
>
	<div class="relative mx-auto max-w-7xl px-4 md:px-6">
		<div
			class="parallax absolute
			-top-24 right-48 z-0 -mx-96 h-full w-full bg-[url('/images/coffee.webp')] bg-contain bg-no-repeat opacity-50 bg-blend-normal drop-shadow [--parallax-speed:5] sm:right-24 sm:bg-auto md:-right-[10vw] lg:opacity-100"
		></div>
		<a id="work">
            <h2
            class="relative z-10 mx-auto font-['Roboto_Mono'] text-xl leading-none tracking-wide text-[#fce4b8]"
          >
            <span class="text-white/50"></span>Resume
            <span class="cursor -ml-2 mb-20 font-['Roboto_Mono'] text-lg text-white/50">
              &#x2590;
            </span>
          </h2>
        <p 
        class="mb-16 pr-24 text-2xl font-medium leading-tight tracking-tight text-slate-300 md:text-3xl lg:w-1/2"
    >
        My name is <span class="font-bold">Sai Sushma Pasupuleti</span>. I'm an Electrical Engineering Doctoral student specializing in power electronics, GaN-based hardware design, and automated validation test systems for energy applications. 
    </p>
    
		</a>

		<div
			class="relative mx-auto space-y-12 overflow-hidden via-90% pb-4 sm:pt-8 sm:before:absolute sm:before:inset-0 sm:before:left-[1px] sm:before:h-full sm:before:w-[1px] sm:before:-translate-x-px sm:before:bg-gradient-to-b sm:before:from-white/25 sm:before:via-white/25 sm:before:to-transparent mt-36"
		>
			{#each work as w, i}
				<Milestone
					from={w.from}
					to={w.to}
					heading={w.title}
					subheading={w.workPlace}
					body={w.body}
					keywords={w.keywords}
					icons={w.icons}
					active={i === 0}
				></Milestone>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	@media screen(lg) {
		:global(.milestone.active) {
			transform: translateX(50px);
			transition:
				transform 0.2s ease-out,
				filter 0.2s ease-in,
				opacity 0.2s ease-in;
			opacity: 1;
		}

		:global(.milestone:not(.active)) {
			transform: translateX(0);
			transition:
				transform 0.5s ease-out,
				filter 0.5s ease-in,
				opacity 0.5s ease-in;
			filter: saturate(0%);
			opacity: 0.35;
		}
	}
</style>
