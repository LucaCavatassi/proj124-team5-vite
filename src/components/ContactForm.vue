<script>
import axios from "axios";

export default {
    name: "ContactComponent",
    props: {
        apartment_id: Number
    },
    data() {
        return {
            form: {
                name: "",
                lastname: "",
                mail: "",
                phone_number: "",
                message: "",
                apartment_id: this.apartment_id
            },
            contactSend: false,
            isLoading: false,
            errors: {},
        };
    },
    methods: {
        sendForm() {
            this.isLoading = true;
            axios
                .post("http://127.0.0.1:8000/api/leads", this.form)
                .then((resp) => {
                    console.log(resp);
                    if (resp.data.success) {
                        this.contactSend = true;
                        this.clearFields();
                    }
                })
                .catch((err) => {
                    console.log('There was an error sending the message:', err);
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
        clearFields() {
            this.form.name = "";
            this.form.lastname = "";
            this.form.mail = "";
            this.form.phone_number = "";
            this.form.message = "";
        },
    },
};
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12 col-md-6">
                <h1>Contattaci!</h1>
                <div class="alert alert-success" v-if="contactSend">
                    Il tuo messaggio è stato inviato con successo
                </div>
                <form>
                    <input type="hidden" :value="apartment_id" name="apartment_id" />
                    <div class="mb-3">
                        <label for="name" class="form-label">Nome</label>
                        <input type="text" class="form-control" :class="{ 'is-invalid': errors.name }" id="name"
                            v-model="form.name" />
                        <div class="invalid-feedback" v-if="errors.name">
                            {{ errors.name[0] }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="lastname" class="form-label">Cognome</label>
                        <input type="text" class="form-control" :class="{ 'is-invalid': errors.lastname }" id="lastname"
                            v-model="form.lastname" />
                        <div class="invalid-feedback" v-if="errors.lastname">
                            {{ errors.lastname[0] }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="mail" class="form-label">Mail</label>
                        <input type="mail" class="form-control" :class="{ 'is-invalid': errors.mail }" id="mail"
                            v-model="form.mail" />
                        <div class="invalid-feedback" v-if="errors.mail">
                            {{ errors.mail[0] }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="phone_number" class="form-label">Numero di telefono</label>
                        <input type="tel" class="form-control" :class="{ 'is-invalid': errors.phone_number }"
                            id="phone_number" v-model="form.phone_number" />
                        <div class="invalid-feedback" v-if="errors.phone_number">
                            {{ errors.phone_number[0] }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Messaggio</label>
                        <textarea class="form-control" :class="{ 'is-invalid': errors.message }" id="message"
                            v-model="form.message"></textarea>
                        <div class="invalid-feedback" v-if="errors.message">
                            {{ errors.message[0] }}
                        </div>
                    </div>

                    <button @click.prevent="sendForm" type="submit" class="btn btn-primary" :disabled="isLoading">
                        <span v-if="!isLoading"> Invia </span>
                        <div v-else class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
