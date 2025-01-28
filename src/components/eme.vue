<template>
    <div>
      <div v-for="faq in faqs" :key="faq">
  
        <div 
          class="accordion-header px-4 py-2 bg-gray-100 cursor-pointer hover:bg-gray-200" 
          @click="accordionToggle(faq)"
        >
          <h3 class="text-lg font-semibold">{{ faq.title }}</h3>
        </div>
  
        <div 
          v-show="activeFaq === faq" 
          class="accordion-body px-4 py-2 bg-gray-50"
        >
          <p>{{ faq.content }}</p>
        </div>
  
      </div>
    </div>
  
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup() {
      const activeFaq = ref(null)
  
      const faqs = [
        {
          title: 'What is Frontend Mentor, and how will it help me?',
          content: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It\'s suitable for all levels and ideal for portfolio building.'
        },
        {
          title: 'Is Frontend Mentor free?',
          content: 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.'
        },
        {
          title: 'Can I use Frontend Mentor projects in my portfolio?',
          content: 'Yes, you can use projects completed on Frontend Mentor in your portfolio. It\'s an excellent way to showcase your skills to potential employers!'
        },
        {
          title: 'How can I get help if I\'m stuck on a Frontend Mentor challenge?',
          content: 'The best place to get help is inside Frontend Mentor\'s Discord community. There\'s a help channel where you can ask questions and seek support from other community members.'
        },
      ]
  
      const accordionToggle = (faq) => {
        console.log('Toggling FAQ:', faq.title)
        activeFaq.value = activeFaq.value === faq ? null : faq
      }
  
      return { activeFaq, faqs, accordionToggle }
    }
  }
  </script>