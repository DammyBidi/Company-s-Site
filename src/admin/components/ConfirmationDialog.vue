<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <div class="modal-actions">
        <button @click="onCancel" class="btn-cancel">Cancel</button>
        <button @click="onConfirm" class="btn-confirm">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps({
  visible: Boolean,
  title: String,
  message: String,
});

const emit = defineEmits(["confirm", "cancel"]);

const onConfirm = () => emit("confirm");
const onCancel = () => emit("cancel");
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  padding: 20px;
  border-radius: 0.5rem;
  background: #2a2a2a;
  max-width: 450px;
  width: 100%;
  text-align: center;
}

.modal-actions {
    flex-wrap: wrap;
    gap: 10px;
}

.btn-confirm,
.btn-cancel {
    flex: 1 1 auto;
    margin: 0 5px;
}


.modal-actions {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

h2, p {

  color: white;
  font-weight: 200;

}

.btn-cancel {
  border-radius: 0.625rem;
  background: #eeeef0;
  color: #111;
  font-size: 1rem;
  padding: 8px 20px;
  border: none;
  cursor: pointer;
  line-height: 1;
}

.btn-confirm {
    background: #EB0A30;
  color: white;
  padding: 8px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 0.625rem;
  cursor: pointer;
  line-height: 1;
}
</style>
