<script lang="ts">
    import {modInformations} from "$lib/utils/modInformations";
    import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

    const popupId = String(Math.random());
    let popupSettings: PopupSettings = {
        event: 'hover',
        placement: 'bottom',
        target: popupId
    };

    export let addonName: string;
</script>

<style>
    .sourceIcon {
        width: 30px;
        height: 30px;
        image-rendering: pixelated;
    }
</style>

{#if modInformations[addonName]?.source !== 'ars_nouveau' && modInformations[addonName]?.icon}
    <img alt={`Added by ${modInformations[addonName].name}`} class="sourceIcon"
         src={modInformations[addonName].icon}
         use:popup={popupSettings}/>
         <div data-popup={popupId} class="text-secondary-500 card variant-filled-primary p-4">
            {`Added by ${modInformations[addonName].name}`}
            <div class="arrow variant-filled-primary" />
        </div>
{/if}