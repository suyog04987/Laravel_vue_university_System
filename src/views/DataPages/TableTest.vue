<template>
    <div>
      <div class="card mt-3">
        <div class="d-flex justify-content-between mb-1">
          <div>
            <input type="text" class="p-0" v-model="search" placeholder="Search" @input="filterData">
          </div>
          <div class="text-right text-lpurple">
            <select v-model="pageNumber" class="float-right" @change="filterData">
              <option value="10" selected>Show</option>
              <option value="200">200</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
            </select>
          </div>
        </div>
        <table class="table table-responsive d-lg-table mt-3">
          <thead>
            <tr>
              <th class="text-center" style="width: 70px">SN</th>
              <th>Name</th>
              <th>Parent</th>
              <th>Order</th>
              <th>Status</th>
              <th class="text-center">Created By</th>
              <th class="text-center">Updated By</th>
              <th></th>
            </tr>
          </thead>
  
          <tbody>
            <tr v-for="(element, index) in dummyData" :key="element.id">
              <td class="text-center">{{ index + 1 }}</td>
              <td>{{ element.name }}</td>
              <td class="text-center">
                <span v-if="element.parent_id">{{ element.parent.name }}</span>
                <span v-else>None</span>
              </td>
              <td>{{ element.order }}</td>
              <td class="text-center">
                <b-button variant="success" v-if="element.status == 1"
                  @click="updateStatus(element.id, 0)">Active</b-button>
                <b-button variant="danger" v-if="element.status == 0"
                  @click="updateStatus(element.id, 1)">Disable</b-button>
              </td>
              <td class="text-center">
                <span v-if="element.created_by">{{ element.created_by.name }}</span>
                <span v-else>None</span>
              </td>
              <td class="text-center">
                <span v-if="element.updated_by">{{ element.updated_by.name }}</span>
                <span v-else>None</span>
              </td>
              <td class="text-center">
                <div class="dropdown table-dropdown">
                  <span class="ic-more text-primary" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false"></span>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#" @click="showModal = true; getSingle(element.id)"
                      >Edit</a>
                    <a href="#" class="dropdown-item" @click="confirmDeleteEntry(element.id)"
                      >Delete</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
  
          <tr v-if="dummyData.length === 0" class="text-center">
            <td colspan="8">
              No content found.
              <button class="btn btn-sm btn-link" @click="showModal = true">Try adding!</button>
            </td>
          </tr>
        </table>
  
        <paginate :page-count="page" :container-class="'pagination mt-1'" :prev-text="'Prev'" :next-text="'Next'"
          :click-handler="clickCallback">
        </paginate>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
//   import Paginate from 'vuejs-paginate-next';
  
  const search = ref('');
  const pageNumber = ref(10);
  const showModal = ref(false);
  
  const dummyData = ref([
    {
      id: 1,
      name: 'Category 1',
      parent_id: null,
      parent: { name: 'Parent 1' },
      order: 1,
      status: 1,
      created_by: { name: 'User 1' },
      updated_by: { name: 'User 2' }
    },
    {
      id: 2,
      name: 'Category 2',
      parent_id: 1,
      parent: { name: 'Parent 1' },
      order: 2,
      status: 0,
      created_by: { name: 'User 3' },
      updated_by: { name: 'User 4' }
    },
    {
      id: 1,
      name: 'Category 1',
      parent_id: null,
      parent: { name: 'Parent 1' },
      order: 1,
      status: 1,
      created_by: { name: 'User 1' },
      updated_by: { name: 'User 2' }
    },
    {
      id: 2,
      name: 'Category 2',
      parent_id: 1,
      parent: { name: 'Parent 1' },
      order: 2,
      status: 0,
      created_by: { name: 'User 3' },
      updated_by: { name: 'User 4' }
    },
    {
      id: 1,
      name: 'Category 1',
      parent_id: null,
      parent: { name: 'Parent 1' },
      order: 1,
      status: 1,
      created_by: { name: 'User 1' },
      updated_by: { name: 'User 2' }
    },
    {
      id: 2,
      name: 'Category 2',
      parent_id: 1,
      parent: { name: 'Parent 1' },
      order: 2,
      status: 0,
      created_by: { name: 'User 3' },
      updated_by: { name: 'User 4' }
    },
    {
      id: 1,
      name: 'Category 1',
      parent_id: null,
      parent: { name: 'Parent 1' },
      order: 1,
      status: 1,
      created_by: { name: 'User 1' },
      updated_by: { name: 'User 2' }
    },
    {
      id: 2,
      name: 'Category 2',
      parent_id: 1,
      parent: { name: 'Parent 1' },
      order: 2,
      status: 0,
      created_by: { name: 'User 3' },
      updated_by: { name: 'User 4' }
    },
    {
      id: 1,
      name: 'Category 1',
      parent_id: null,
      parent: { name: 'Parent 1' },
      order: 1,
      status: 1,
      created_by: { name: 'User 1' },
      updated_by: { name: 'User 2' }
    },
    {
      id: 2,
      name: 'Category 2',
      parent_id: 1,
      parent: { name: 'Parent 1' },
      order: 2,
      status: 0,
      created_by: { name: 'User 3' },
      updated_by: { name: 'User 4' }
    },
    // Add more dummy data as needed
  ]);
  


  </script>