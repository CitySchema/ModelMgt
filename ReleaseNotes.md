** Release Notes:

**3.0.0
The 3.0.0 Release has many simplifications in the Tasks and a few changes that make it easier to do automated processing of large batched of new models.

This release should be considered a draft.  I will put these tools and tasks through their paces while enrolling the new CC3D library data.

The tasks in the Import Edit Inspect and Enroll Models have been re-organized so that Model Attributes can be set for models while they are in the Prep_MP feature class. Previously, these attributes were set within the Import Models task. The Assign Model Attributes task also sets the attribute for Model_Batch to the name of the folder that holds the Batch_GDB.

The Promote and Demote Models task group (formerly named "Stage Changes" has new and revised tasks that facilitate the automated flagging of Promotion and Demotion Candidates which are designeted through the QA_Flag field. The tools for this automated flagging are saved in the toolbox associated with the model batch. 

In this newly documented bulk promo/demo procedure, the curator adjusts the candidate flags as necessary based on the observed collisions between new an existing models or other status changes. 

The QA_Flag provides a very handy way of highlighting, and un-flagging candidates through a pair of definition query layers that provide instant feedback. 

New QA Flag Domains:
The new Promo/Demo Candidate flags have been added to the default domains. To see these new values, you may need to update geodatabases in your current Stage feature classes. 

To Upgrade your Workspace:
1. Download this entire repository to your dev folder.  
2. Copy the Tools/ModelMgt.tbx to replece the old version in your production ModelMgt workspace.
3. Copy the latest ArcDocs/Tasks/ManageModelCollection202209819.esriTasks to your production ModelMgt workspace.
4. Install the new tasks into your working ArcPro project to replace the old tasks. 
5. Copy the stage/modelMgt_config.gdb to your local copy.  
6. Update the domains in your Stage geodatabase using the task Initialize Workspace/Update Domains.
6. When needed, you may need to update the domain on some of your stage feature classes if you need the pull-down to reflect the new candidate domain values.  
