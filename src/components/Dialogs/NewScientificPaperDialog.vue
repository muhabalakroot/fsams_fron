<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="1024">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> إضافة إنتاج علمي </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <TheH1>إضافة إنتاج علمي</TheH1>
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-container>
              <v-row>
                <v-col cols="4">
                  <TheTextFieldLable>عنوان الإنتاج العلمي</TheTextFieldLable>
                  <v-text-field
                    :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                    v-model="scientificPaperTitle"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="4"
                  ><TheTextFieldLable>جهة النشر</TheTextFieldLable>
                  <v-text-field
                    :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                    v-model="publisher"
                  >
                  </v-text-field
                ></v-col>

                <v-col cols="4"
                  ><TheTextFieldLable>نوع جهة النشر</TheTextFieldLable>
                  <v-select
                    v-model="publisherType"
                    :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                    item-title="value"
                    item-value="id"
                    :items="[
                      { id: 1, value: 'مجلة علمية محلية' },
                      { id: 2, value: 'مجلة علمية عالمية' },
                      { id: 3, value: 'مؤتمر علمي محلي' },
                      { id: 4, value: 'مؤتمر علمي عالمي' },
                    ]"
                  >
                  </v-select>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4"
                  ><TheTextFieldLable
                    >رابط موقع نشر الإنتاج العلمي</TheTextFieldLable
                  >
                  <v-text-field
                    :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                    v-model="scientificPaperUrl"
                  >
                  </v-text-field
                ></v-col>
                <v-col cols="4"
                  ><TheTextFieldLable>تاريخ النشر</TheTextFieldLable>
                  <v-text-field
                    type="date"
                    :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                    v-model="dateOfpublishing"
                  >
                  </v-text-field
                ></v-col>
              </v-row>

              <v-divider class="ma-2"></v-divider>

              <v-alert type="info"> يجب رفع الانتاج العلمي بدون أسماء </v-alert>

              <v-row>
                <v-col cols="4"
                  ><TheTextFieldLable>الإنتاج العلمي</TheTextFieldLable>
                  <v-file-input
                    :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                    hint="الإنتاج العلمي بدون أسماء"
                    v-model="scientificPaperNoNamesFile"
                  ></v-file-input>
                </v-col>
              </v-row>

              <v-divider class="ma-2"></v-divider>

              <v-alert type="info"
                >في حالة تم نشر الإنتاج العلمي في مؤتمر علمي، يرجي رفع رسالة من
                المؤتمر بقبول الإنتاج العلمي.</v-alert
              >

              <v-row>
                <v-col cols="4"
                  ><TheTextFieldLable
                    >رسالة بقبول الإنتاج العلمي</TheTextFieldLable
                  >
                  <v-file-input
                    :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                    v-model="acceptanceLetter"
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <div align="left">
          <v-divider></v-divider>
          <v-btn variant="text" @click="dialog = false" class="mx-2">
            إلغاء
          </v-btn>
          <v-btn @click="addNewScientificPapers"> حفظ </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { useUsersStore } from "@/store/user";
import { mapActions } from "pinia";
export default {
  data: () => ({
    dialog: false,
    acceptanceLetter: [],
    dateOfpublishing: "",
    id: new Date().getTime(),
    publisher: "",
    publisherType: "",
    scientificPaperNoNamesFile: [],
    scientificPaperTitle: "",
    scientificPaperUrl: "",
  }),

  methods: {
    ...mapActions(useUsersStore, ["addScientificPapers"]),
    async addNewScientificPapers() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.addScientificPapers({
          acceptanceLetter: this.acceptanceLetter,
          dateOfpublishing: this.dateOfpublishing,
          id: this.id,
          publisher: this.publisher,
          publisherType: this.publisherType,
          scientificPaperNoNamesFile: this.scientificPaperNoNamesFile,
          scientificPaperTitle: this.scientificPaperTitle,
          scientificPaperUrl: this.scientificPaperUrl,
        });
        this.dialog = false;
      }
    },
  },
};
</script>
