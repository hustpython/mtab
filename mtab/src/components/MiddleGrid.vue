<template>
    <div class="video-grid-content"
         >
        <ul class="video-grid">
            <li class="video-card-1-2"
                v-contextmenu="(el: HTMLElement)=>contextmenusThumbnails(el)"
            ></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-2-4"></li>
            <li class="video-card-2-4"></li>
            <li class="video-card-3-6"></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-3-6"></li>
            <li class="video-card-3-6"></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-1-2"></li>
            <li class="video-card-1-2"></li>

        </ul>
    </div>

</template>

<script setup lang="ts">
    import {ContextmenuItem} from '@/components/Contextmenu/types'

    const contextmenusThumbnails = (el: HTMLElement): ContextmenuItem[] => {
        console.log(el)
        return [
            {
                text: '粘贴',
                subText: 'Ctrl + V',

            },
            {
                text: '全选',
                subText: 'Ctrl + A',

            },
            {
                text: '新建页面',
                subText: 'Enter',

            },
            {
                text: '幻灯片放映',
                subText: 'F5',

            },
        ]
    }
</script>

<style scoped lang="scss">
    
    .video-grid-content {
        position: absolute;
        max-width: 1350px;
        max-height: 600px;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: inline-block;
        overflow: auto;

        .video-grid {
            grid-gap: 20px;
            position: relative;
            display: grid;
            padding-top: 2vh;
            user-select: none;
            grid-template-columns: repeat(auto-fill, 90px);
            grid-template-rows: repeat(auto-fill, 90px);
            grid-auto-flow: dense;
            box-sizing: border-box;
            justify-content: center;

            .video-card-1-2 {
                grid-column: span 1;
                grid-row: span 2;
                background: green;
                height: 180px;
                width: 90px;
                border-radius: 10px;
            }

            .video-card-2-4 {
                grid-column: span 2;
                grid-row: span 4;
                background: red;
                height: 360px;
                width: 180px;
                border-radius: 10px;
            }

            .video-card-3-6 {
                grid-column: span 3;
                grid-row: span 6;
                background: #0040ff;
                height: 540px;
                width: 270px;
                border-radius: 10px;
            }
        }
    }
</style>