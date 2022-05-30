initSidebarItems({"constant":[["CLUSTERED_FORWARD_STORAGE_BUFFER_COUNT",""],["DIRECTIONAL_SHADOW_LAYERS",""],["MAX_DIRECTIONAL_LIGHTS",""],["MAX_UNIFORM_BUFFER_POINT_LIGHTS",""],["MESH_SHADER_HANDLE",""],["MESH_STRUCT_HANDLE",""],["MESH_VIEW_BIND_GROUP_HANDLE",""],["PBR_SHADER_HANDLE",""],["SHADOW_FORMAT",""],["SHADOW_SHADER_HANDLE",""],["SKINNING_HANDLE",""]],"enum":[["AlphaMode","Alpha mode"],["ClusterConfig","Configuration of the clustering strategy for clustered forward rendering"],["ClusterFarZMode","Configure the far z-plane mode used for the furthest depth slice for clustered forward rendering"],["GpuPointLights",""],["LightEntity",""],["RenderLightSystems",""],["SimulationLightSystems",""]],"fn":[["add_clusters",""],["calculate_cluster_factors",""],["check_light_mesh_visibility",""],["extract_clusters",""],["extract_lights",""],["extract_meshes",""],["extract_skinned_meshes",""],["prepare_clusters",""],["prepare_lights",""],["prepare_skinned_meshes",""],["queue_material_meshes",""],["queue_mesh_bind_group",""],["queue_mesh_view_bind_groups",""],["queue_shadow_view_bind_group",""],["queue_shadows",""],["update_directional_light_frusta",""],["update_point_light_frusta",""]],"mod":[["draw_3d_graph",""],["prelude",""],["wireframe",""]],"struct":[["AmbientLight","An ambient light, which lights the entire scene equally."],["ClusterZConfig","Configure the depth-slicing strategy for clustered forward rendering"],["Clusters",""],["CubemapVisibleEntities",""],["DirectionalLight","A Directional light."],["DirectionalLightBundle","A component bundle for [`DirectionalLight`] entities."],["DirectionalLightShadowMap",""],["DrawMesh",""],["ExtractedClusterConfig",""],["ExtractedClustersPointLights",""],["ExtractedDirectionalLight",""],["ExtractedJoints",""],["ExtractedPointLight",""],["GlobalLightMeta",""],["GlobalVisiblePointLights",""],["GpuDirectionalLight",""],["GpuLights",""],["GpuPointLight",""],["GpuPointLightsStorage",""],["GpuPointLightsUniform",""],["GpuStandardMaterial","The GPU representation of a [`StandardMaterial`]."],["LightMeta",""],["MaterialMeshBundle","A component bundle for entities with a [`Mesh`] and a [`SpecializedMaterial`]."],["MaterialPipeline",""],["MaterialPipelineKey",""],["MaterialPlugin","Adds the necessary ECS resources and render logic to enable rendering entities using the given [`SpecializedMaterial`] asset type (which includes [`Material`] types)."],["MeshBindGroup",""],["MeshPipeline",""],["MeshPipelineKey","MSAA uses the highest 6 bits for the MSAA sample count - 1 to support up to 64x MSAA."],["MeshRenderPlugin",""],["MeshUniform",""],["MeshViewBindGroup",""],["NotShadowCaster","Add this component to make a `Mesh` not cast shadows."],["NotShadowReceiver","Add this component to make a `Mesh` not receive shadows."],["PbrPlugin","Sets up the entire PBR infrastructure of bevy."],["PointLight","A light that emits light in all directions from a central point."],["PointLightBundle","A component bundle for [`PointLight`] entities."],["PointLightShadowMap",""],["SetMaterialBindGroup",""],["SetMeshBindGroup",""],["SetMeshViewBindGroup",""],["SetShadowViewBindGroup",""],["Shadow",""],["ShadowPassNode",""],["ShadowPipeline",""],["ShadowPipelineKey",""],["ShadowView",""],["SkinnedMeshJoints",""],["SkinnedMeshUniform",""],["StandardMaterial","A material with “standard” properties used in PBR lighting Standard property values with pictures here https://google.github.io/filament/Material%20Properties.pdf."],["StandardMaterialFlags",""],["StandardMaterialKey",""],["StandardMaterialUniformData","The GPU representation of the uniform data of a [`StandardMaterial`]."],["ViewClusterBindings",""],["ViewLightEntities",""],["ViewLightsUniformOffset",""],["ViewShadowBindings",""],["VisiblePointLights",""]],"trait":[["Material","Materials are used alongside [`MaterialPlugin`] and `MaterialMeshBundle` to spawn entities that are rendered with a specific [`Material`] type. They serve as an easy to use high level way to render [`Mesh`] entities with custom shader logic. For materials that can specialize their [`RenderPipelineDescriptor`] based on specific material values, see [`SpecializedMaterial`]. [`Material`] automatically implements [`SpecializedMaterial`] and can be used anywhere that type is used (such as [`MaterialPlugin`])."],["SpecializedMaterial","Materials are used alongside [`MaterialPlugin`] and `MaterialMeshBundle` to spawn entities that are rendered with a specific [`SpecializedMaterial`] type. They serve as an easy to use high level way to render [`Mesh`] entities with custom shader logic. `SpecializedMaterials` use their [`SpecializedMaterial::Key`] to customize their [`RenderPipelineDescriptor`] based on specific material values. The slightly simpler [`Material`] trait should be used for materials that do not need specialization. [`Material`] types automatically implement [`SpecializedMaterial`]."]],"type":[["DrawShadowMesh",""],["PbrBundle","A component bundle for PBR entities with a [`Mesh`] and a [`StandardMaterial`]."]]});