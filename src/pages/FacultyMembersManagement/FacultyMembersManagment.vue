<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-card
          prepend-icon=""
          color="primary"
          class="mx-auto pa-2"
          max-width="350"
          variant="outlined"
        >
          <v-icon
            size="75"
            class="ma-4 mb-2"
            color="primary"
            icon="mdi-account-group-outline"
          ></v-icon>
          <v-card-item>
            <div>
              <div v-if="userRole == 'department-head'" class="text-h6 mb-1">
                أعضاء هيئة التدريس بالقسم العلمي
              </div>
              <div
                v-if="userRole == 'faculty-affairs-office'"
                class="text-h6 mb-1"
              >
                أعضاء هيئة التدريس بالكلية
              </div>
              <div v-if="userRole == 'department-head'">
                من هذا يمكن إضافة وتعديل وحذف حسابات أعضاء هيئة التدريس بالقسم
                العلمي
              </div>
              <div v-if="userRole == 'faculty-affairs-office'">
                من هذا يمكن إضافة وتعديل وحذف حسابات أعضاء هيئة التدريس بالكلية
              </div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn
              @click="$router.push({ name: 'FacultyMembersAccounts' })"
              append-icon="mdi-chevron-left"
              variant="outlined"
            >
              متابعة
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
          color="primary"
          class="mx-auto pa-2"
          max-width="350"
          variant="outlined"
        >
          <v-icon
            size="75"
            class="ma-4 mb-2"
            color="primary"
            icon="mdi-note-edit-outline"
          ></v-icon>
          <v-card-item>
            <div>
              <div v-if="userRole == 'department-head'" class="text-h6 mb-1">
                طلبات أعضاء هيئة التدريس بالقسم العلمي
              </div>
              <div
                v-if="userRole == 'faculty-affairs-office'"
                class="text-h6 mb-1"
              >
                أعضاء هيئة التدريس بالكلية
              </div>
              <div v-if="userRole == 'department-head'" class="">
                من هذا يمكن معالجة طلبات أعضاء هيئة التدريس بالقسم العلمي.
              </div>
              <div v-if="userRole == 'faculty-affairs-office'">
                من هذا يمكن معالجة طلبات أعضاء هيئة التدريس بالكلية.
              </div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn
              @click="
                $router.push({ name: 'FacultyMembersApplicationsManagement' })
              "
              append-icon="mdi-chevron-left"
              variant="outlined"
            >
              متابعة
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { useUsersStore } from "@/store/user";
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(useUsersStore, ["userRole"]),
  },
};
</script>
