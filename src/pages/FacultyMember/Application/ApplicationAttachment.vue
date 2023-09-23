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
          <td>{{ attachments[i].name }}<span style="color: red">*</span></td>
          <td>{{ attachments[i].description }}</td>
          <td>
            <v-icon
              :icon="attachments[i].file.name ? 'mdi-check' : ''"
              color="success"
            >
            </v-icon>
          </td>
          <td>
            <v-file-input
              v-if="attachments[i].file.name == null"
              density="compact"
              hide-details="true"
              @change="onFileChanged($event, i)"
            ></v-file-input>
            <v-btn v-if="attachments[i].file.name" class="ma-1"
              ><v-icon
                v-model="attachments[i].file"
                icon="mdi-eye-outline"
              ></v-icon
            ></v-btn>
            <v-btn
              v-if="attachments[i].file.name"
              @click="deleteFile(i)"
              color="error"
              class="ma-1"
              ><v-icon icon="mdi-delete-outline"></v-icon
            ></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <v-alert
      v-if="
        attachments[0].file.name == null ||
        attachments[1].file.name == null ||
        attachments[2].file.name == null ||
        attachments[3].file.name == null ||
        attachments[4].file.name == null ||
        attachments[5].file.name == null
      "
      type="error"
      >يجب ملئ الحقول الاجبارية</v-alert
    >

    <div align="left">
      <v-divider></v-divider>
      <v-btn
        variant="text"
        color="error"
        class="mx-2"
        @click="goback"
        prepend-icon="mdi-chevron-right"
        >عودة
      </v-btn>
      <v-btn
        :loading="isLoading"
        :disabled="isLoading"
        variant="text"
        class="mx-2"
        @click="save"
      >
        حفظ
      </v-btn>
      <v-btn
        @click="validate"
        :loading="isLoadingAndGO"
        :disabled="isLoadingAndGO"
      >
        حفظ واستمرار
      </v-btn>
    </div>
  </v-form>
</template>
<script>
import { useApplyingStore } from "@/store/applying";
import { mapWritableState, mapActions } from "pinia";
import swal from "sweetalert";

export default {
  data() {
    return {
      isLoadingAndGO: false,
      isLoading: false,
      attachments: null,
      num: [0, 1, 2, 3, 4, 5],
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
  },
  methods: {
    ...mapActions(useApplyingStore, ["addAttachment"]),
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
    onFileChanged(e, i) {
      this.applyings[0].attachments[i].file = e.target.files[0];
      console.log(this.applyings[0].attachments[i].file);
    },
    deleteFile(i) {
      this.applyings[0].attachments[i].file = [];
    },
    async validate() {
      const valid =
        this.attachments[0].file.name == null ||
        this.attachments[1].file.name == null ||
        this.attachments[2].file.name == null ||
        this.attachments[3].file.name == null ||
        this.attachments[4].file.name == null ||
        this.attachments[5].file.name == null;
      if (!valid) {
        this.isLoadingAndGO = true;
        setTimeout(() => {
          this.$router.push({
            name: "ApplicationReview",
            params: { id: this.$route.params.id },
          });
          this.isLoadingAndGO = false;
        }, 1500);
      }
    },
    goback() {
      this.$router.push({
        name: "ApplicationScientificPaper",
        params: { id: this.$route.params.id },
      });
    },
    save() {
      this.isLoading = true;
      setTimeout(() => {
        swal({
          title: "تم الحفظ",
          icon: "success",
          button: null,
          timer: 1000,
        });
        this.isLoading = false;
      }, 1500);
    },
  },
  created() {
    this.initialize();
  },
};
</script>
