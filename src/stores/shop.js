import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
/* import axios from 'axios' */
import shopCatalog from '../shop/shop.json'

export const useShopStore = defineStore('shop', () => {
    const basket = ref([])
    const countProduct = ref(4)
    const isLoading = ref(false)

    const shop = computed(() => {
        return shopCatalog.slice(0, countProduct.value)
    })

    const moreProduct = () => {
        isLoading.value = true
        setTimeout(() => {
            countProduct.value += 4
            isLoading.value = false
        }, 600)
    }

    const summ = computed(() => {
        return basket.value.length !== 0 ? basket.value.map((item) => Number(item.price)).reduce((a, b) => a + b) : 0

    })

    const removeToBasket = (index) => {
        basket.value.splice(index, 1)
    }

    const showBattonAndLoader = computed(() => {
        return shopCatalog.length !== shop.value.length
    })
    const addToBasket = (product) => {
        basket.value.push(product)
    }


    return { basket, shop, countProduct, isLoading, moreProduct, shopCatalog, summ, removeToBasket, addToBasket, showBattonAndLoader }
})