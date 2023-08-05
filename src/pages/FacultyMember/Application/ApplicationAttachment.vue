<template>
  <TheH1>المرفقات</TheH1>

  <v-alert type="info">يفضل أن يتم رفع الملفات بصيغة PDF.</v-alert>
  <v-form ref="form">
    <v-table>
      <thead>
        <tr>
          <th class="text-right">البيان</th>
          <th class="text-right">الوصف</th>
          <th class="text-right">تم</th>
          <th class="text-center">الإجراءات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in num" :key="i">
          <td>{{ attachments[i].name }}</td>
          <td>{{ attachments[i].description }}</td>
          <td>
            <v-icon color="success">{{ attachments[i].isUploaded }}</v-icon>
          </td>
          <td>
            <v-file-input
              density="compact"
              hide-details="true"
              v-model="selectedFile"
              @change="onFileChanged($event, attachments[i])"
            ></v-file-input>
          </td>
        </tr>
      </tbody>
    </v-table>

    <div align="left">
      <v-divider></v-divider>

      <v-btn variant="text" class="mx-2"> حفظ </v-btn>
      <v-btn @click="validate"> حفظ واستمرار </v-btn>
    </div>
  </v-form>
</template>
<script>
import { useApplyingStore } from "@/store/applying";
import { mapWritableState } from "pinia";
export default {
  data() {
    return {
      attachments: null,
      num: [0, 1, 2, 3, 4],
      isSelecting: false,
      selectedFile: [],
      users: null,
      page: 1,
      itemsPerPage: 5,
      attachmentHeader: [
        {
          align: "start",
          key: "name",
          title: "بيان",
          sortable: false,
        },
        { title: "وصف", key: "description" },
        { title: "تم", key: "isUploaded" },
        { title: "إجراءات", key: "file", align: "start" },
        { key: "id" },
      ],
    };
  },
  computed: {
    ...mapWritableState(useApplyingStore, ["applyings"]),
    pageCount() {
      return Math.ceil(this.attachments.length / this.itemsPerPage);
    },
  },
  methods: {
    handleFileImport() {
      this.isSelecting = true;

      // After obtaining the focus when closing the FilePicker, return the button state to normal
      window.addEventListener(
        "focus",
        () => {
          this.isSelecting = false;
        },
        { once: true }
      );

      // Trigger click on the FileInput
      console.log(this.$refs.uploader.click());
    },
    initialize() {
      this.attachments = this.applyings[0].attachments;
    },
    onFileChanged(e, paperId) {
      this.selectedFile = e.target.files[0];

      const attachment = this.attachments.find((file) => file.id === paperId);
      console.log(paperId);
      console.log(attachment.file);
      console.log(this.selectedFile);
      // Update the file property of the attachment
      // attachment.file = [this.selectedFile];
    },
    async validate() {
      const { valid } = await this.$refs.form.validate();
      if (valid)
        this.$router.push({
          name: "ApplicationReview",
          params: { id: this.$route.params.id },
        });
    },
  },
  created() {
    this.initialize();
  },
};
</script>
