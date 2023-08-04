<template>
  <TheH1>المرفقات</TheH1>

  <v-alert type="info">يفضل أن يتم رفع الملفات بصيغة PDF.</v-alert>
  <v-form ref="form">
    <v-data-table
      hover
      v-model:page="page"
      :headers="headers"
      :items="attachments"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1 mt-2"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.columns.name }}</td>
          <td>{{ item.columns.description }}</td>
          <td>
            <v-icon
              v-if="item.columns.file.length > 0"
              color="success"
              :icon="item.columns.isUploaded"
            ></v-icon>
          </td>
          <td>
            <v-btn class="mx-2 my-1"
              ><v-icon
                icon="mdi-tray-arrow-up"
                @click="handleFileImport"
              ></v-icon
              ><v-file-input
                ref="uploader"
                class="d-none"
                v-model="selectedFile"
                @change="onFileChanged($event, item.columns.id)"
              ></v-file-input
            ></v-btn>
            <v-btn color="error" class="mx-2 my-1"
              ><v-icon icon="mdi-delete-outline"></v-icon
            ></v-btn>
          </td>
        </tr>
      </template>
      <template v-slot:bottom>
        <div class="text-center pt-2">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </template>
    </v-data-table>

    <div align="left">
      <v-divider></v-divider>

      <v-btn variant="text" class="mx-2"> حفظ </v-btn>
      <v-btn @click="validate"> حفظ واستمرار </v-btn>
    </div>
  </v-form>
</template>
<script>
import { useUsersStore } from "@/store/user";
import { mapWritableState } from "pinia";
export default {
  data() {
    return {
      isSelecting: false,
      selectedFile: [],
      users: null,
      page: 1,
      itemsPerPage: 5,
      headers: [
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
    ...mapWritableState(useUsersStore, ["attachments"]),
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
      this.$refs.uploader.click();
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
          name: "ApplicationScientificPaper",
          params: this.$route.params.id,
        });
    },
  },
};
</script>
