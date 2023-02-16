<template>
    <slot />
    <Field
        class="pe-5 password-input form-control"
        :type="type"
        :id="id"
        :placeholder="placeholder"
        :invalid="invalid"
        :value="modelValue"
        :name="name"
        @change="$emit('update:modelValue', $event.target.value)"
        @blur="onBlur($event)"
    />
    <div>
        <ErrorMessage :name="name" />
    </div>
</template>

<script setup>
import { Field, ErrorMessage } from 'vee-validate';
const props = defineProps({
    placeholder: {
        type: String,
        default: 'Your Placeholder'
    },
    label: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    modelValue: {
        type: String,
        default: '',
        required: true
    },
    className: {
        type: String,
        default: '',
        required: false
    },
    invalid: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'text'
    },
    id: {
        type: String,
        default: ''
    }
});
const emit = defineEmits(['update:modelValue', 'blur']);
const onBlur = (e) => {
    emit('blur', e);
};
</script>
