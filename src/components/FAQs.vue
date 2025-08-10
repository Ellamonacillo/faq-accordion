<template>
    <section id="accordion-collapse" data-accordion="collapse" class="p-5 bg-white rounded-lg font-worksans w-xl">
        <div class="pb-2 flex items-center">
            <img src="/assets/icon-star.svg" class="inline-block" alt="Star Icon">
            <h1 class="font-extrabold pl-5 text-3xl text-dark-purple">FAQS</h1>
        </div>
        <div v-for="faq in faqs" :key="faq.id" :class="{'py-3 border-t-1 border-gray-200': !faq.isOpen, 'py-3': faq.isOpen}">
            <h2 :id="`accordion-collapse-heading-` + faq.id">
                <button type="button" class="flex items-center justify-between w-full" :aria-expanded="faq.isOpen.toString()" :aria-controls="'accordion-collapse-body-' + faq.id" @click="toggleAccordion(faq.id)">
                    <h3 class="text-left font-semibold text-dark-purple hover:text-purple-600">{{ faq.title }}</h3>
                    <img class="pl-2" :src="faq.isOpen ? '/assets/icon-minus.svg' : '/assets/icon-plus.svg'" alt="Plus Icon"/>
                </button>
            </h2>
            <div :id="'accordion-collapse-body-' + faq.id" :class="{ hidden: !faq.isOpen }" :aria-labelledby="'accordion-collapse-heading-' + faq.id">
                <div class="pt-3">
                    <p class="text-grayish-purple text-sm">{{ faq.content }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const faqs = ref([
            {   
                id: 1,
                title: 'What is Frontend Mentor, and how will it help me?',
                content: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It\'s suitable for all levels and ideal for portfolio building.',
                isOpen: true,
            },
            {
                id: 2,
                title: 'Is Frontend Mentor free?',
                content: 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
                isOpen: false,
            },
            {
                id: 3,
                title: 'Can I use Frontend Mentor projects in my portfolio?',
                content: 'Yes, you can use projects completed on Frontend Mentor in your portfolio. It\'s an excellent way to showcase your skills to potential employers!',
                isOpen: false,
            },
            {
                id: 4,
                title: 'How can I get help if I\'m stuck on a Frontend Mentor challenge?',
                content: 'The best place to get help is inside Frontend Mentor\'s Discord community. There\'s a help channel where you can ask questions and seek support from other community members.',
                isOpen: false,
            },
        ])

        const toggleAccordion = (faqId) => {
            const faq = faqs.value.find(faq => faq.id === faqId)
            if (faq) faq.isOpen = !faq.isOpen
        }

        return { faqs, toggleAccordion }
    }
}
</script>
