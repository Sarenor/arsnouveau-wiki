<script lang="ts">
    import Ingredient from "$lib/components/patchouli/RecipeDisplay/Ingredient.svelte";
    import {getLabelWithCurrentValues} from "$lib/languages.js";
    import {getIdFromResourceLocation} from "$lib/utils/idResolver.js";
    import Plus from "$lib/components/icons/Plus.svelte";
    import Arrow from "$lib/components/icons/Arrow.svelte";

    export let recipeData: App.EnchantmentRecipe;

    const getEnchantmentLabel = (label: string) => {
        if (label === 'ars_nouveau:reactive') {
            return getLabelWithCurrentValues(`enchantment.ars_nouveau.${getIdFromResourceLocation(label)}`)
        }
        return getLabelWithCurrentValues(`enchantment.minecraft.${getIdFromResourceLocation(label)}`)
    }

    $: mappedInputItems = recipeData.pedestalItems.map(ingredient => ingredient.item || ingredient.tag)
</script>

<h4 class="mb-3">Enchanting Apparatus Recipe</h4>
<div class="craftingRecipe">
    <div class="card card-body flex flex-col items-center">
        <span>Pedestal Items:</span>
        <div class="craftingGrid">
            {#each mappedInputItems as ingredient}
                <Ingredient {ingredient}/>
            {/each}
        </div>
    </div>
    <Plus/>
    <div class="card card-body flex flex-col items-center justify-center craftingGridItem">
        Item to be enchanted
    </div>
    {#if recipeData.sourceCost}
        <Plus/>
        <div class="card card-body flex flex-col items-center justify-center craftingGridItem">
            <span>Source: </span>
            <span>{recipeData.sourceCost}</span>
        </div>
    {/if}
    <Arrow/>
    <div class="card card-body">
        {`The Enchantment ${getEnchantmentLabel("ars_nouveau:reactive")} at level 1 will be applied to your item`}
    </div>
</div>
<p>The spell inscribed on the parchment will automatically be inscribed on the reactive item. The Spell Parchment needs
    to be an inscribed spell parchment</p>

