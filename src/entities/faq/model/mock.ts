import type { FaqGroup, FaqQuestion } from './types'

/** Популярные вопросы — на главной и первым разделом на странице FAQ */
export const POPULAR_QUESTIONS: FaqQuestion[] = [
  {
    id: 'q1',
    question: 'Почему круглую пиццу ставят в квадратную коробку, а нарезают треугольниками?',
    answer: 'Так её удобнее хранить, перевозить и делить на равные части.',
  },
  {
    id: 'q2',
    question: 'Почему после ремонта дорога опять проваливается?',
    answer: 'Потому что делают ее без соблюдения технологических процессов.',
  },
  {
    id: 'q3',
    question: 'Почему вода мокрая?',
    answer: 'Молекулы воды прилипают к поверхностям — это и ощущается как «мокрое».',
  },
  {
    id: 'q4',
    question: 'Видят ли микробы друг друга?',
    answer: 'Глаз у микробов нет, но они чувствуют друг друга с помощью химических сигналов.',
  },
  {
    id: 'q5',
    question: 'Почему кровь красная а вены синие?',
    answer: 'Кровь красная всегда, а вены кажутся синими из-за того, как кожа рассеивает свет.',
  },
  {
    id: 'q6',
    question: 'Из чего сделана радуга?',
    answer: 'Из солнечного света, преломлённого в капельках воды.',
  },
]

const makeQuestions = (prefix: string, count: number): FaqQuestion[] =>
  Array.from({ length: Math.min(count, 5) }, (_, i) => ({
    id: `${prefix}-${i + 1}`,
    question: `Вопрос ${i + 1} из раздела`,
    answer: 'Ответ на вопрос появится здесь. Текст подтянется с бэкенда.',
  }))

/** Разделы страницы FAQ: заголовок, количество ответов и вопросы */
export const FAQ_GROUPS: FaqGroup[] = [
  { id: 'popular', title: 'Популярные вопросы', total: 6, questions: POPULAR_QUESTIONS },
  {
    id: 'setup',
    title: 'Настройка работы в Signy',
    total: 25,
    questions: makeQuestions('setup', 25),
  },
  { id: 'docs', title: 'Работа с документами', total: 15, questions: makeQuestions('docs', 15) },
  {
    id: 'security',
    title: 'Информация по безопасности',
    total: 17,
    questions: makeQuestions('security', 17),
  },
  { id: 'tech', title: 'Технические вопросы', total: 16, questions: makeQuestions('tech', 16) },
  {
    id: 'integration',
    title: 'Интеграция',
    total: 15,
    questions: makeQuestions('integration', 15),
  },
  { id: 'general', title: 'Общие вопросы', total: 57, questions: makeQuestions('general', 57) },
]
