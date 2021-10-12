import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import { store } from "~/store";

interface CoreState {
  name: string;
}

@Module({ dynamic: true, store, name: "IndexPage", namespaced: true })
class Core extends VuexModule implements CoreState {
  // state
  name: string = "";

  // mutations
  @Mutation
  private SET_NAME(name: string) {
    this.name = name;
  }

  // actions
  @Action({})
  public fetch() {
    this.SET_NAME("dada");
  }
}
export default getModule(Core);
